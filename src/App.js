import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "./AppStyle";
import UserProvider from "./contexts/UserContext";
import RouterSales from "./RouterSales";
import NotificationContainer from "react-notifications/lib/NotificationContainer";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <NotificationContainer leaveTimeout={3000} />
        <UserProvider>
          <Route path="/" component={RouterSales} strict />
        </UserProvider>
      </Container>
    </BrowserRouter>
  );
}

export default App;
