/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

const scalc = 1440
const w = window.innerWidth;
const h = window.innerHeight;
const ret = w / 1440 * 10
const size = ret < 6.5 ? 6.5 : (ret > 10 ? 10 : ret)
document.documentElement.style.fontSize = size + 'px';


async function getAddress(lat, lng) {
    const geocoder = new qq.maps.Geocoder();
    let coord = new qq.maps.LatLng(lat, lng);

    //对指定地址进行解析
    geocoder.getAddress(coord);
    return new Promise((resolve, reject) => {
        geocoder.setError((err) => {
            resolve(false)
            // console.log(address + '地址输入错误', err)
        })
        //设置服务请求成功的回调函数
        geocoder.setComplete((res) => {
            resolve(res.detail)
        })
    });
}

window.getAddress = getAddress