import React from "react";
import {Header} from "./components/header/Header";
import {HomePage} from "./components/home/HomePage";
import {ContainerWrapper} from "./components/common/ContainerWrapper";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PizzaBuilder} from "./components/cutomizer/PizzaBuilder";
import {OrderSubmit} from "./components/submit/OrderSubmit";

function App() {
  return <>
    <Header/>
    <ContainerWrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customize" element={<PizzaBuilder/>} />
          <Route path="/submit" element={<OrderSubmit />} />
        </Routes>
      </BrowserRouter>
    </ContainerWrapper>
  </>;
}

export default App;
