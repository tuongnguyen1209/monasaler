import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "./AppStyle";
import UserProvider from "./contexts/UserContext";
import RouterSales from "./RouterSales";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <UserProvider>
          <Route path="/" component={RouterSales} strict />
        </UserProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
