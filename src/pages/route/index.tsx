import { ReactNode } from "react";
import {
    Route,
} from "react-router-dom";
import DropPage from "../drop";
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
    {
        text: '手势',
        icon: 'iconshezhi',
        itemKey: 'drop',
        comp: <Route path={setPagePath('drop')} exact component={DropPage} />
    },
];


export {
    setPagePath,
}
export default menu_route;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       