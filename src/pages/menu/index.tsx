/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useLayoutEffect, useState } from "react";
import { useHistory } from 'react-router-dom';
import { stopInterval } from "../../utils/js_utils/interval";
import useSlice from "../../hooks/useSlice";
import Storage from "../../utils/js_utils/storage";
import { actions, GlobalStateInterface } from "../../store/global_slice";
import menu_route, { basePath, } from "../route";
import Icon from "../../components/icon";

const tabHeight = '60px'
const Menu = () => {
    const history = useHistory()
    const [global_slice, dispatch] = useSlice<GlobalStateInterface>();
    const path = history.location.pathname.split('/').join('/').replace(basePath, '');


    return (
        <>
            <div style={{ height: `calc(2rem + ${tabHeight})`, }}></div>
            <div className="flex" style={{
                position: 'fixed',
                bottom: 0,
                width: '100vw',
                height: tabHeight,
                left: 0,
                background: global_slice?.mode === 'light' ? '#fff' : '#000',
                color: global_slice?.mode === 'light' ? '#333' : '#eee',
            }} >
                {
                    menu_route.map(item => {
                        return (
                            <div
                                key={item.itemKey}
                                className='fdc'
                                style={{ flex: 1 }}
                                onClick={(el: any) => {
                                    stopInterval() // 重置全局轮训
                                    history.push(basePath + item.itemKey)
                                }}
                            >
                                <Icon icon={item.icon} />
                                <div> {item.text}</div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Menu;



