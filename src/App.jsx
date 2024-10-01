import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Alumnos from "./pages/Alumnos";
import Preinscripcion from "./pages/Preinscripcion";
import Reportes from "./pages/Reportes";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/alumnos" element={<Alumnos />} />
            <Route path="/preinscripcion" element={<Preinscripcion />} />
            <Route path="/reportes" element={<Reportes />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
