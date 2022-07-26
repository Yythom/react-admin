/* eslint-disable @typescript-eslint/no-unused-vars */

import { Boundary } from "./components";
import { useQuery } from "./hooks";
import { postApiV1AdminProfileLogin, ProfileLoginRequest, ProfileLoginResponse } from "./service/apis";

const ReqDemo = () => {
  const [data, params, setParams, { fetch, fetchPage }] = useQuery<ProfileLoginResponse, ProfileLoginRequest>(
    postApiV1AdminProfileLogin,
    {
      initParams: {
        "password": "7c222fb2927d828af22f592134e8932480637c0d",
        "account": "superadmin",
        page: 1
      } as any,
    }
  )
  console.log(data);

  return (
    <div className='SendQuery' onClick={() => {
      setParams({
        ...params,
        "account": "superadmin",
      })
    }}>
      123123
      {data?.token}
      {/* 
      <button onClick={() => fetchPage()}>分页</button>
      <button onClick={() => fetchPage(10)}>第10</button> */}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      12312
      <Boundary>
        <ReqDemo />
      </Boundary>
    </div>
  );
}

export default App;
