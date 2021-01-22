import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Chat from "./components/chat";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route path="/chat" component={Chat} />
    </BrowserRouter>
  );
};

export default Routes;
