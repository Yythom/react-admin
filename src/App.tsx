/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button, list, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from "@chakra-ui/react";
import { createContext, ReactNode, useContext, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, useRoutes } from "react-router-dom";
import { useToggle } from "react-use";
import { Boundary } from "./components";
import { ModalControl } from "./feature";
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
      <ModalControl />

      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </div>
  );
}

export default App;
