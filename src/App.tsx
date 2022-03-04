/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo, } from "react";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Menu from "./pages/menu";
import { Layout, Nav, Switch, } from "@douyinfe/semi-ui";
import intl from 'react-intl-universal'
import zh_CN from './lang/zh_CN'
import en_US from './lang/en_US'
import Login from "./pages/login";
import Logo from "./global-component/logo";
import DemoComponent from "./pages/right/demo/demo";
import CacheRoute from "react-router-cache-route";
import { actions } from "./store/global_slice";
import useSlice from "./hooks/useSlice";
import ProTable from "./pages/right/table/table";

const { Header, Sider, Content } = Layout;
const App = () => {
  const [global_slice, dispatch] = useSlice();
  useMemo(() => {
    intl.init({
      warningHandler: (msg, detail) => {
        // console.log('intl错误', msg, detail);
      },
      currentLocale: global_slice?.lang,
      locales: {
        zh_CN,
        en_US,
      }
    })
  }, [global_slice?.lang])

  // console.log("APP 组件更新了");
  return (
    <div className="App">
      <Router>
        <Layout style={{ border: '1px solid var(--semi-color-border)' }}>
          <Sider >
            <div style={{ padding: '0 30px' }}><Logo /></div>
            <Menu />
            {/* <Route path='/:pages/' exact component={Menu} /> */}
          </Sider>
          <Layout>
            <Header>
              <Nav
                style={{
                  height: '92px',
                  padding: '0 90px',
                }}
                mode="horizontal"
                header={
                  <>
                    {/* <div style={{ width: '1.5px', height: '60px', background: 'rgba(35, 38, 47,.1)', marginLeft: '40px', marginRight: '20px' }}></div> */}
                  </>
                }
                footer={
                  <>
                    <div className='head-item setting' style={{ transform: 'scale(0.6)' }}>
                      <Switch
                        size='large'
                        defaultChecked
                        onChange={() => {
                          const body = document.body;
                          dispatch(actions.setMode(body.hasAttribute('theme-mode') ? 'light' : 'dark'))
                          if (body.hasAttribute('theme-mode')) {
                            body.removeAttribute('theme-mode');
                          } else {
                            body.setAttribute('theme-mode', 'dark');
                          }
                        }}
                      >Theme</Switch>
                    </div>
                  </>
                }
              ></Nav>
            </Header>
            <Content
              style={{
                padding: '12px 12px 12px 12px',
                height: 'calc(100vh - 70px)',
                boxSizing: 'border-box',
                overflow: 'scroll',
              }}
            >
              <Route path='/login' exact component={Login} />
              <Route path='/table' exact component={ProTable} />
              <CacheRoute exact path="/demo">
                <DemoComponent />
              </CacheRoute>
              {/* <Route path='/demo' exact component={DemoComponent} /> */}
            </Content>
          </Layout>
        </Layout>
      </Router >
    </div >
  );
}



export default App;



