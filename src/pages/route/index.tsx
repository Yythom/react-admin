import { ReactNode } from "react";
import {
    Route,
} from "react-router-dom";
import HomePage from "../home";
export const basePath = '/';

const setPagePath = (_path: string) => {
    return `${basePath}${_path}`
}
export interface RouteItemInterface {
    text: string,
    itemKey: string,
    icon: string,
    comp?: ReactNode | JSX.Element
}

const menu_route: RouteItemInterface[] = [
    {
        text: '首页',
        icon: 'iconshezhi',
        itemKey: 'home',
        comp: <Route path={setPagePath('home')} exact component={HomePage} />
    },
];


export {
    setPagePath,
}
export default menu_route;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       