import CacheRoute from "react-router-cache-route";
import {
    Route,
} from "react-router-dom";
import DemoComponent from "../main/demo/demo";
import ProTable from "../main/table/table";
export const basePath = '/main/';

const setPagePath = (_path: string) => {
    return `${basePath}${_path}`
}
export interface RouteItemInterface {
    text: string,
    itemKey: string,
    icon: string,
    items?: {
        text: string,
        itemKey: string,
        icon: string,
    }[]
}

const menu_route: RouteItemInterface[] = [
    {
        text: '系统测试',
        icon: 'iconshezhi',
        itemKey: 'system',
        items: [{
            itemKey: 'system/demo', //地址本 
            icon: 'iconjigouguanli',
            text: '测试',
        }]
    },
    {
        text: '表单',
        icon: 'iconshangsheng',
        itemKey: 'table',
    },
];

// 此处应为请求
const get_menu_route: () => Promise<RouteItemInterface[]> = async () => {
    return new Promise<RouteItemInterface[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(menu_route);
        }, 1000);
    })
}


const RouteComponentsMap: {
    [key: string]: {
        text: string;
        component: JSX.Element;
    }
} = {
    'table': {
        text: '表单页',
        component: <Route path={setPagePath('table')} exact component={ProTable} />
    },
    'system/demo': {
        text: 'demo测试',
        component: <CacheRoute exact path={setPagePath('system/demo')} >
            <DemoComponent />
        </CacheRoute >
    }
}

export {
    setPagePath,
    get_menu_route
}
export default RouteComponentsMap;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       