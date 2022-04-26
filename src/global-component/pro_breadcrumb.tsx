import { Breadcrumb } from "@douyinfe/semi-ui";
import { memo, useMemo } from "react";
import { useHistory } from "react-router-dom";
import useSlice from "../hooks/useSlice";
import { basePath, RouteItemInterface } from "../pages/route";
import { GlobalStateInterface } from "../store/global_slice";

const ProBreadcrumb = memo(() => {
    const history = useHistory();
    const [global] = useSlice<GlobalStateInterface>();
    const path = history.location.pathname.split('/').join('/').replace(basePath, '').split('/');

    const bread: RouteItemInterface[] = useMemo(() => {
        const BreadcrumbArray: RouteItemInterface[] = []
        if (path) {
            if (path[0]) {
                global.user_route.forEach(e => {
                    if (e.itemKey.includes(path[0])) {
                        BreadcrumbArray.push(e);
                        if (path[1]) {
                            e.items?.forEach(child => {
                                if (child.itemKey.includes(path.join('/'))) {
                                    BreadcrumbArray.push(child);
                                }
                            })
                        }
                    }
                })
            }
        }
        return BreadcrumbArray
    }, [path, global?.user_route])

    return <div className="card" style={{ marginBottom: '1rem' }} >
        <Breadcrumb>
            <Breadcrumb.Item onClick={() => { localStorage.removeItem('openKeys'); window.location.href = window.location.origin + '/index'; }}   >
                主页
            </Breadcrumb.Item>
            {
                bread.map(e => (
                    <Breadcrumb.Item
                        key={e.itemKey}
                        onClick={() => {
                            if (!e.items) history.replace(basePath + e.itemKey)
                        }}
                    >
                        {e.text}
                    </Breadcrumb.Item>
                ))
            }
        </Breadcrumb>
    </div>
})

export default ProBreadcrumb