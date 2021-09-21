import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "./AppStyle";
import UserProvider from "./contexts/UserContext";
import PWAPrompt from "react-ios-pwa-prompt";
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
      <PWAPrompt
        promptOnVisit={3}
        timesToShow={1}
        copyClosePrompt="Close"
        copyBody="This website has app functionality. Add it to your home screen to use it in fullscreen."
        permanentlyHideOnDismiss={false}
      />
    </BrowserRouter>
  );
}

export default App;
