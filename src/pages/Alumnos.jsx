import React, {useState} from "react";
import "./Alumnos.css";

const Alumnos = () => {
  // Simulación de los datos de los alumnos
  const [alumnos, setAlumnos] = useState([
    {
      id: 1,
      nombre: "Juan Pérez",
      edad: 25,
      altura: 175,
      objetivos: "Aumentar masa muscular",
      diasPreferidos: "Lunes, Miércoles, Viernes",
      horarioPreferido: "18:00 - 19:30",
      cuotaPagada: true,
    },
    {
      id: 2,
      nombre: "María López",
      edad: 30,
      altura: 160,
      objetivos: "Mejorar resistencia",
      diasPreferidos: "Martes, Jueves",
      horarioPreferido: "08:00 - 09:30",
      cuotaPagada: false,
    },
  ]);

  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  const handleAlumnoClick = (alumno) => {
    setAlumnoSeleccionado(alumno);
  };

  const handleCloseDetails = () => {
    setAlumnoSeleccionado(null);
  };

  return (
    <div className="alumnos-container">
      <h2>Lista de Alumnos</h2>
      <ul className="alumnos-list">
        {alumnos.map((alumno) => (
          <li
            key={alumno.id}
            onClick={() => handleAlumnoClick(alumno)}
            tabIndex="0"
          >
            {alumno.nombre}
          </li>
        ))}
      </ul>

      {alumnoSeleccionado && (
        <div className="alumno-detalle">
          <h3>Perfil de {alumnoSeleccionado.nombre}</h3>
          <button onClick={handleCloseDetails}>Cerrar</button>
          <p>
            <strong>Edad:</strong> {alumnoSeleccionado.edad} años
          </p>
          <p>
            <strong>Altura:</strong> {alumnoSeleccionado.altura} cm
          </p>
          <p>
            <strong>Objetivos:</strong> {alumnoSeleccionado.objetivos}
          </p>
          <p>
            <strong>Días Preferidos:</strong>{" "}
            {alumnoSeleccionado.diasPreferidos}
          </p>
          <p>
            <strong>Horario Preferido:</strong>{" "}
            {alumnoSeleccionado.horarioPreferido}
          </p>
          <p>
            <strong>Cuota Pagada:</strong>{" "}
            {alumnoSeleccionado.cuotaPagada ? (
              <span className="status pagado">Sí</span>
            ) : (
              <span className="status no-pagado">No</span>
            )}
          </p>
        </div>
      )}
    </div>
  );
};

export default Alumnos;
