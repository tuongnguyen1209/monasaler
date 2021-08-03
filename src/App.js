import React from "react";
import { Container } from "./AppStyle";
import Content from "./layout/Content/Content";
import Footer from "./layout/Navigation/Navigation";
import Header from "./layout/Header/Header";

function App() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}

export default App;
