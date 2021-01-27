import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Chat from "./components/chat";
import Join from "./components/Join";
import OTP from "./components/otp";
import Verify from "./components/verify";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
      <Route path="/otp" component={OTP} />
      <Route path="/verify" component={Verify} />
    </BrowserRouter>
  );
};

export default Routes;
