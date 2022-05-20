/* eslint-disable @typescript-eslint/no-unused-vars */
import ProEchart from "@/features/echart/pro_echart";
import React, { memo, useEffect, useState } from "react";
import './index.scss'
import { MoveBox, MoveSquare, MoveTigger } from "../../../features/movepophover";
import OssUpload from "../../../features/oss/oss_upload";
import Masonry from "react-responsive-masonry"
import JoditEditor from "jodit-react";
import Editor from "../../../features/editor";
import handleViewport from "react-in-viewport";
import ViewPort from "@/components/view_port";
import ErrorBoundary from "@/components/Boundary";
import SendQuery from "./query";
import InsetFrom from "@/features/InsetFrom/Form";
import { Radio } from "@douyinfe/semi-ui";
import InfiniFrom from "./forms";
const images = [
    "https://picsum.photos/200/300?image=1050",
    //...
    "https://picsum.photos/300/300?image=206",
]

const arr = [1, 2, 3, 4]

const DemoComponent = memo(() => {
    const [index, setIndex] = useState(0);

    function move(i: number) {
        i > arr.length - 1 ? setIndex(0) : i < 0 ? setIndex(arr.length - 1) : setIndex(i)
    }

    return <div>
        <ErrorBoundary>
            <SendQuery />
        </ErrorBoundary>
        {/* <MyWrapper /> */}
        {/* <Editor placeholder="dadwalkdnlk" option={{ minHeight: 1000 }} /> */}
        <InfiniFrom />
        {/* {
            <Masonry columnsCount={4} >
                {
                    Array.from(new Array(100).keys()).map((e, i) => {
                        return <ViewPort key={e} style={{ marginBottom: '30px', height: 200 + i * 20 + 'px' }} >
                            <div className="fc" style={{ background: 'pink', width: '200px', height: 200 + i * 20 + 'px' }}>
                                {i}
                            </div>
                        </ViewPort>
                    })
                }
            </Masonry>
        } */}

        <div style={{ width: '100px' }}>
            {/* <OssUpload /> */}
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

            {/* <MoveBox>
                <MoveTigger>
                    移入到此处
                </MoveTigger>
                <MoveSquare>1923890</MoveSquare>
            </MoveBox> */}


            {/* <ProEchart
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
            /> */}
        </div>

    </div >
});

export default DemoComponent;