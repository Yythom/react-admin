/* eslint-disable @typescript-eslint/no-unused-vars */
import { memo } from "react";
import ImagesComponent from "../../../components/img_show/img_show";
import './index.scss'
import OssUpload from "./oss/oss_upload";
const DemoComponent = memo(() => {

    return <div>
        <div style={{ width: '100px' }}>
            <OssUpload />
            {/* 层叠布局 */}
            <ImagesComponent imgList={Array.from(Array(20))} />
        </div>
    </div>
});

export default DemoComponent;