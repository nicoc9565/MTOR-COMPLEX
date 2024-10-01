import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <main className="dashboard-container">
      <h2>Resumen del Gimnasio</h2>
      <div className="dashboard-cards">
        <div className="card">
          <h3>Alumnos Inscritos</h3>
          <p className="card-value">120</p>
        </div>
        <div className="card">
          <h3>Pagos Recibidos</h3>
          <p className="card-value">$10,000</p>
        </div>
        <div className="card">
          <h3>Asistencias esta Semana</h3>
          <p className="card-value">80</p>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
