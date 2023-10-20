import React from "react";
import { Link } from "react-router-dom";
import "./Curso.css";

const Curso = () => {
  return (
    <main className="home">
      <div className="about-content">
        <br></br>
        <br></br>
        <center><h2>Guía para Desarrolladores 👨🏻‍💻</h2></center>
        <br></br>
        <br></br>
        <p>
          En esta sección se proporciona información para ayudarte a hacer uso de tecnologías y APIs.
        </p>
        <br></br>
        <center>
          <Link to="/html" className="button-small" style={{ marginRight: '10px' }}>HTML</Link>
          <Link to="/css" className="button-small1" style={{ marginRight: '10px' }}>CSS</Link>
          <Link to="/javascript" className="button-success" style={{ marginRight: '10px' }}>JAVASCRIPT</Link>
          <Link to="/apis" className="button-warning button-large">API's</Link>
        </center>
      </div>
      <br></br>
      <a href="./Proyectos">
  <img src="./react-logo.jpg" alt="Texto Alternativo" />
</a>
      <br></br>
      <div className="container">
        <div className="split left"></div>
      </div>
    </main>
  );
};

export default Curso;