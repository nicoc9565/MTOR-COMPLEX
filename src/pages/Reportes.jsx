import React, {useState, useEffect} from "react";
import "./Reportes.css";

// Datos de ejemplo (puedes reemplazarlos por datos de tu backend)
const alumnos = [
  {
    id: 1,
    nombre: "Juan Pérez",
    pago: true,
    asistencia: ["Lunes 10:00", "Miércoles 17:00"],
  },
  {id: 2, nombre: "Ana Gómez", pago: false, asistencia: ["Martes 18:00"]},
  {
    id: 3,
    nombre: "Carlos Ruiz",
    pago: true,
    asistencia: ["Lunes 10:00", "Viernes 19:00"],
  },
];

const Reportes = () => {
  const [alumnosPagados, setAlumnosPagados] = useState([]);
  const [alumnosNoPagados, setAlumnosNoPagados] = useState([]);
  const [asistenciaPorHorario, setAsistenciaPorHorario] = useState({});

  useEffect(() => {
    const pagados = alumnos.filter((alumno) => alumno.pago);
    const noPagados = alumnos.filter((alumno) => !alumno.pago);
    const asistencia = {};

    alumnos.forEach((alumno) => {
      alumno.asistencia.forEach((horario) => {
        if (!asistencia[horario]) {
          asistencia[horario] = [];
        }
        asistencia[horario].push(alumno.nombre);
      });
    });

    setAlumnosPagados(pagados);
    setAlumnosNoPagados(noPagados);
    setAsistenciaPorHorario(asistencia);
  }, []);

  return (
    <div className="reportes">
      <h2>Reportes de Alumnos</h2>

      <div className="reporte-section">
        <h3>Alumnos que han pagado</h3>
        <ul>
          {alumnosPagados.map((alumno) => (
            <li key={alumno.id}>{alumno.nombre}</li>
          ))}
        </ul>
      </div>

      <div className="reporte-section">
        <h3>Alumnos que no han pagado</h3>
        <ul>
          {alumnosNoPagados.map((alumno) => (
            <li key={alumno.id}>{alumno.nombre}</li>
          ))}
        </ul>
      </div>

      <div className="reporte-section">
        <h3>Asistencia por Horario</h3>
        {Object.keys(asistenciaPorHorario).map((horario) => (
          <div key={horario}>
            <h4>{horario}</h4>
            <ul>
              {asistenciaPorHorario[horario].map((nombre, index) => (
                <li key={index}>{nombre}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reportes;
