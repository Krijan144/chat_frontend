import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Chat from "./components/chat";
import Join from "./components/Join";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Join} />
      <Route path="/chat" component={Chat} />
    </BrowserRouter>
  );
};

export default Routes;
