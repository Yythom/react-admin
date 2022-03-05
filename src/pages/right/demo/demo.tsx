/* eslint-disable @typescript-eslint/no-unused-vars */
import { IconSearch } from "@douyinfe/semi-icons";
import { Button, Input, Modal, Select, TagInput } from "@douyinfe/semi-ui";
import { memo, useMemo, useState } from "react";
import ImagesComponent from "../../../components/img_show/img_show";
import './index.scss'
const DemoComponent = memo(() => {
    return <div>

        <button onClick={() => {
            // console.log(transactions);

        }}>
            test
        </button>

        <div style={{ width: '100px' }}>
            {/* 层叠布局 */}
            <ImagesComponent imgList={Array.from(Array(20))} />
        </div>
    </div>
});

export default DemoComponent;