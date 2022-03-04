/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useState, memo, useLayoutEffect, useMemo, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import './index.scss'
import navLinkTo from "../../utils/js_utils/navlink";
import { Nav, } from "@douyinfe/semi-ui";
import { startInterval, stopInterval } from "../../utils/js_utils/interval";
import useSlice from "../../hooks/useSlice";
import { IconSetting, IconTaskMoneyStroked, } from "@douyinfe/semi-icons";
import Storage from "../../utils/js_utils/storage";

const Menu = () => {
    const history = useHistory()
    const [collapse, setcollapse] = useState(false);
    const [global_slice, dispatch] = useSlice();

    const [menu, setmenu] = useState(window.location.pathname.split('/')[1] || '');
    const tabs = useMemo(() => {
        if (!global_slice?.mode) return
        return [
            {
                text: '系统',
                icon: <IconSetting />,
                itemKey: 'System',
                isOpen: true,

                items: [{
                    itemKey: 'demo', //地址本 
                    text: '测试',
                },],
            },
            {
                text: '表单',
                icon: <IconTaskMoneyStroked />,
                itemKey: 'table',
            },
        ]
    }, [global_slice?.mode, menu])

    // useLayoutEffect(() => {
    //     if (!getStorageSync('userinfo')) {
    //         history.replace('/')
    //     } 
    //     // setmenu(itemkey)
    // }, []); 
    if (!global_slice?.mode) return null

    return (
        <div className="menu fdc">
            <Nav
                className='menu'
                defaultOpenKeys={Storage.getStorageSync('openKeys') || []}
                selectedKeys={[menu]}
                style={{ height: '100%', border: 'none' }}
                items={tabs}
                onClick={(el) => {
                    if (!el?.openKeys) {
                        stopInterval() // 重置全局轮训
                        setmenu(el.itemKey)
                        navLinkTo(history, el.itemKey)
                    } else {
                        Storage.setStorageSync('openKeys', el.openKeys);
                    }
                }}
                onCollapseChange={(e) => {
                    setcollapse(e)
                }}
                header={{
                    logo: <div>
                        {/* <div className='flex'>
                            <img className='logo' src="//lf1-cdn-tos.bytescm.com/obj/ttfe/ies/semi/webcast_logo.svg" />
                            {!collapse && <div style={{ fontSize: '20px', fontWeight: 'bold' }}>name</div>}
                        </div> */}
                        {/* <Logo /> */}
                        {/* <Card className='user fc' >
                            <ConnectWallets network="Solana" />
                        </Card> */}
                    </div >,
                }}

            />
        </div >

    );
}

export default Menu;



