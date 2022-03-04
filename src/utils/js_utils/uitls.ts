class Utils {
    // 一键导航
    static goMap(desc: string, lat: string | number, lng: string | number) {
        let isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1; //android终端
        let isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isiOS) {
            // window.location.href = `maps://?saddr=&daddr=${desc}`
        }
        if (isAndroid) {
        }
        let map = {
            marker: `coord:${lat},${lng}`
        }
        window.location.href = `https://apis.map.qq.com/tools/poimarker?type=0&marker=${map.marker}&key=4I7BZ-HIS3P-ELWD3-L2R4G-MOYBJ-OLBXZ&referer=hb-h5`
    }

    static debounce(func: Function, threshold = 500, run = false) {
        if (typeof func !== 'function') {
            throw new Error('First argument of debounce function should be a function');
        }
        let timer: any;
        return (...args: any[]) => {
            const callNow = run && !timer;
            const later = () => {
                timer = null;
                if (!run) func.apply(this, args);
            };
            ////console.log('please wait');
            clearTimeout(timer);
            timer = setTimeout(later, threshold);
            if (callNow) func.apply(this, args);
            // console.log(func);

        };
    }


}

export default Utils;

