import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Chat from "./components/chat";
import login from "./components/login";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/login" component={login} />
      <Route path="/chat" component={Chat} />
    </BrowserRouter>
  );
};

export default Routes;
