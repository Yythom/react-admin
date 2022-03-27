/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo, useState } from "react";
import './index.scss'
import OssUpload from "./oss/oss_upload";

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
            <div className="select"  >
                下拉
                <div className="float fd">
                    <span>aaa</span>
                    <span>aaa</span>
                    <span>aaa</span>
                </div>
            </div>

            <div className="swiper">
                <span onClick={() => move(index - 1)}>{'<'}</span>
                <span onClick={() => move(index + 1)}>{'>'}</span>
                {
                    arr.map(e =>
                        <div key={e} style={{ transform: `translateX(-${index * 200}px)` }}>{e}</div>
                    )
                }
            </div>

        </div>
    </div>
});

export default DemoComponent;