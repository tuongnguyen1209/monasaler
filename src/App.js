import React from "react";
import { Container } from "./AppStyle";
import Content from "./layout/Content/Content";
import Footer from "./layout/Navigation/Navigation";
import Header from "./layout/Header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
      {/* <LoginPage /> */}
    </Container>
  );
}

export default App;
