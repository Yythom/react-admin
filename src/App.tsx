/* eslint-disable @typescript-eslint/no-unused-vars */
import { Fragment, memo, ReactNode, } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { GlobalStateInterface } from "@/store/global_slice";
import useSlice from "@/hooks/useSlice";
import { basePath } from "@/pages/route";
import menu_route from "@/pages/route";
import { NavBar } from 'react-vant'
import Login from "./pages/login";
import Menu from "./pages/menu";

export const NavHeader = memo(({ left = null, right = null, title = '首页', showBack }:
  {
    left?: ReactNode,
    right?: ReactNode,
    title: string | ReactNode,
    showBack?: boolean
  }) =>
  <div
    style={{ position: 'sticky', top: 0, zIndex: 100 }}
  >
    <NavBar
      title={title}
      leftText={left}
      rightText={right}
      leftArrow={showBack ? false : <span />}
    />
  </div>
)

const App = () => {
  const [global_slice] = useSlice<GlobalStateInterface>();

  return (
    <div className="App">
      <Router>
        <div className="page">
          <div className="main"  >
            <Route path='/' exact component={Login} />
            {/* <Route path={basePath} component={ProBreadcrumb} /> */}
            {
              menu_route.map(e => {
                return <Fragment key={e.itemKey}>{e.comp}</Fragment>
              })
            }
            <Menu />
          </div>
        </div>
      </Router >
    </div >
  );
}



export default App;



