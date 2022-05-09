/* eslint-disable @typescript-eslint/no-unused-vars */
import ProEchart from "@/components/echart/pro_echart";
import { memo, useEffect, useState } from "react";
import './index.scss'
import { MoveBox, MoveSquare, MoveTigger } from "./movepophover";
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

            <div className="swiper">
                <span onClick={() => move(index - 1)}>{'<'}</span>
                <span onClick={() => move(index + 1)}>{'>'}</span>
                {
                    arr.map(e =>
                        <div key={e} style={{ transform: `translateX(-${index * 200}px)` }}>{e}</div>
                    )
                }
            </div>
            <MoveBox>
                <MoveTigger>
                    移入到此处
                </MoveTigger>
                <MoveSquare>1923890</MoveSquare>
            </MoveBox>
            <ProEchart
                classname='test'
                option={{
                    x_option: {
                        name: 'X',
                        data: [1, 2, 3, 4, 5, 6, 7],
                    },
                }}
                dataSource={[
                    [
                        {
                            name: '123',
                            list: [133, 334, 555, 766, 1233]
                        }
                    ]
                ]}
            />
        </div>

    </div>
});

export default DemoComponent;