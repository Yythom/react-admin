/* eslint-disable @typescript-eslint/no-unused-vars */

import { BrowserRouter, Routes, useRoutes } from "react-router-dom";
import { Boundary } from "./components";
import { useQuery } from "./hooks";
import Component from "./routes";
import routes from "./routes";
import { postApiV1AdminProfileLogin, ProfileLoginRequest, ProfileLoginResponse } from "./service/apis";

const ReqDemo = () => {
  const [data, params, setParams, { fetch, fetchPage }] = useQuery<ProfileLoginResponse, ProfileLoginRequest>(
    postApiV1AdminProfileLogin,
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
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </div>
  );
}

export default App;
