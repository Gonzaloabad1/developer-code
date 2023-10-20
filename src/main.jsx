import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./pages/Home/Home.jsx";
import Curso from "./pages/Curso/Curso.jsx";
import Html from "./pages/Html/Html.jsx";
import Css from "./pages/Css/Css.jsx";
import Javascript from "./pages/Javascript/Javascript.jsx";
import Api from "./pages/Api/Api.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx"
import Proyectos from "./pages/Proyectos/Proyectos.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/curso" element={<Curso />} />
          <Route path="/html" element={<Html />} />
          <Route path="/css" element={<Css />} />
          <Route path="/Javascript" element={<Javascript />} />
          <Route path="/Api" element={<Api />} />
          <Route path="/Proyectos" element={<Proyectos />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Footer" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
