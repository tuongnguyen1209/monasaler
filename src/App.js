import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "./AppStyle";
import RouterSales from "./RouterSales";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Route path="/" component={RouterSales} strict />
      </Container>
    </BrowserRouter>
  );
}

export default App;
