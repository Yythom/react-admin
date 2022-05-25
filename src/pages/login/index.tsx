/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
    useHistory,
} from "react-router-dom";
import { stopInterval } from "../../utils/js_utils/interval";
import './index.scss'
import useSlice from "../../hooks/useSlice";
import { GlobalStateInterface } from "../../store/global_slice";
import { basePath } from "../route";
import { Button } from "react-vant";
import Logo from "@/features/logo";
import { useQuery } from "@/hooks/useQuery";

const Login = () => {
    stopInterval()
    const [global_slice, dispatch] = useSlice<GlobalStateInterface>();
    const history = useHistory()
    const [data, params, setParams, { fetch, fetchPage, loading }] = useQuery<any, any>(
        async function name(params) {
            console.log('接收到的', params);
            history.replace('home')
            return true
        },
        {
            initParams: {
                "password": "7c222fb2927d828af22f592134e8932480637c0d",
                "account": "superadmin",
                page: 1
            } as any,
            onwerRun: true,
            onSuccess: () => {
                // history.replace(basePath)
            }
        }
    )

    return (
        <div className='login fdc'>
            <Logo />
            <div className="fdc" style={{ marginTop: '3rem' }}>
                <input
                    value={params?.account}
                    prefix='账号：'
                    onChange={(e) => setParams('account', e.target.value)}
                />
                <input
                    value={params?.password}
                    type='password'
                    onChange={(e) => setParams('password', e.target.value)}
                />
                <Button
                    loading={loading}
                    className="btn"
                    onClick={() => fetch()}
                >
                    登录
                </Button>
            </div>
        </div >
    )
}

export default Login