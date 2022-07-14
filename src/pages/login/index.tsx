import dayjs from 'dayjs'
import { useRef, useState } from 'react'
import './index.scss'

function getLocation(): any {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((pos) => {
            const coords = pos.coords || {}
            const { latitude, longitude } = coords
            // alert(JSON.stringify({ '纬度': latitude, '经度': longitude }))
            resolve({ latitude, longitude })
        }, (e) => {
            reject(e)
        }, {
            timeout: 10000,
            maximumAge: 10000
        })
    })
}


function openFileUrl(file: any, type?: any): any {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsArrayBuffer(file)

        reader.onload = function (e: any) {
            console.log(e.target)
            let blob
            if (typeof e.target.result === 'object') {
                blob = new Blob([e.target.result], { type })
            } else {
                blob = e.target.result
            }
            resolve(URL.createObjectURL(blob))
        }
    })
}
const Login = () => {
    const [url, seturl] = useState('');
    const [loc, setloc] = useState({ latitude: '', longitude: '' });

    const ref = useRef<any>()
    const onFileChange = async (e: any) => {
        const files = e.target.files
        const url = await openFileUrl(files[0], files[0].type)
        seturl(url)
        setloc(await getLocation())
        e.target.value = ''
    }
    return (
        <div className='login fdc'>
            <input ref={ref} type="file" onChange={onFileChange} style={{ position: 'fixed', opacity: '0', zIndex: -999 }} />
            <div style={{ position: 'relative' }}>
                <img style={{ width: '94vw', }} src={url} alt="" />
                {url && <div className='mask' style={{
                    background: '#000',
                    width: '100%',
                    height: '100%',
                    opacity: '.3',
                    position: 'absolute',
                    zIndex: 1,
                    top: '0',
                    right: '0',

                }}></div>}

                <div
                    style={{
                        fontSize: '14px',
                        position: 'absolute',
                        color: '#fff',
                        bottom: '16px',
                        zIndex: 3,
                        left: '12px'
                    }}
                >
                    {url && <div style={{ marginTop: '4px' }}>时间：{dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss')}</div>}
                    {url && <div style={{ marginTop: '4px' }}>地址：台州市沿赤工业区南节点机房</div>}
                    <div style={{ marginTop: '4px' }}>纬度：{loc.latitude}</div>
                    <div style={{ marginTop: '4px' }}>经度：{loc.longitude}</div>
                </div>
            </div>
            <button
                style={{
                    marginTop: '20px',
                    fontSize: '18px',
                }}
                onClick={() => { ref.current.click() }}>
                拍照
            </button>
        </div >
    )
}

export default Login