/* eslint-disable @typescript-eslint/no-unused-vars */
import ProEchart from "@/components/echart/pro_echart";
import React, { memo, useEffect, useState } from "react";
import './index.scss'
import { MoveBox, MoveSquare, MoveTigger } from "./movepophover";
import OssUpload from "./oss/oss_upload";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
const images = [
    "https://picsum.photos/200/300?image=1050",
    //...
    "https://picsum.photos/300/300?image=206",
]
class MyWrapper extends React.Component {
    render() {
        return (
            // <ResponsiveMasonry
            //     columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            // >
            <Masonry columnsCount={2} >
                <div style={{ height: '100px', background: 'pink', margin: '10px' }}>1</div>
                <div style={{ height: '120px', background: 'pink', margin: '10px' }}>2</div>
                <div style={{ height: '140px', background: 'pink', margin: '10px' }}>3</div>
                <div style={{ height: '90px', background: 'pink', margin: '10px' }}>4</div>
                <div style={{ height: '160px', background: 'pink', margin: '10px' }}>4</div>
            </Masonry>
            // </ResponsiveMasonry>
        )
    }
}
const arr = [1, 2, 3, 4]
const DemoComponent = memo(() => {
    const [index, setIndex] = useState(0);

    function move(i: number) {
        i > arr.length - 1 ? setIndex(0) : i < 0 ? setIndex(arr.length - 1) : setIndex(i)
    }

    return <div>
        {/* <MyWrapper /> */}

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