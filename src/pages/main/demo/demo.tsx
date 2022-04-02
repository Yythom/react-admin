/* eslint-disable @typescript-eslint/no-unused-vars */
import ProEchart from "@/components/echart/pro_echart";
import { memo, useState } from "react";
import Player from 'griffith'
import './index.scss'
import OssUpload from "./oss/oss_upload";
const sources = {
    hd: {
        play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4',
    },
    sd: {
        play_url: 'https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_sd.mp4',
    },
}
const arr = [1, 2, 3, 4]
const DemoComponent = memo(() => {
    const [index, setIndex] = useState(0);

    function move(i: number) {
        i > arr.length - 1 ? setIndex(0) : i < 0 ? setIndex(arr.length - 1) : setIndex(i)
    }
    return <div>
        <div style={{ width: '100px' }}>
            <OssUpload />
            {/* 层叠布局 */}
            {/* <ImagesComponent imgList={Array.from(Array(20))} /> */}


            <div className="swiper">
                <span onClick={() => move(index - 1)}>{'<'}</span>
                <span onClick={() => move(index + 1)}>{'>'}</span>
                {
                    arr.map(e =>
                        <div key={e} style={{ transform: `translateX(-${index * 200}px)` }}>{e}</div>
                    )
                }
            </div>
            <ProEchart
                classname='test'
                option={{
                    x_option: {
                        name: 'X',
                        data: [1, 2, 3, 4, 5, 6, 7],
                    },
                    y_option: {
                        name: 'Y'
                    },
                    dataSource: [140, 232, 101, 264, 90, 340, 250],
                }}
            />

            <div style={{
                width: '80rem',
                height: '30rem'
            }}>
                <Player sources={sources} id={""} />
            </div>
        </div>
    </div>
});

export default DemoComponent;