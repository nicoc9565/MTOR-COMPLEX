import React, {useState} from "react";
import "./preinscripcion.css";

const PreinscriptionForm = () => {
  const [formData, setFormData] = useState({
    nombreCompleto: "",
    edad: "",
    altura: "",
    objetivos: "",
    problemasMedicos: "",
    diasPreferidos: "",
    horarioPreferido: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Lógica para enviar los datos al backend
  };

  return (
    <form className="preinscription-form" onSubmit={handleSubmit}>
      <h2>Formulario de Preinscripción</h2>

      <label>Nombre Completo</label>
      <input
        type="text"
        name="nombreCompleto"
        value={formData.nombreCompleto}
        onChange={handleChange}
        required
      />

      <label>Edad</label>
      <input
        type="number"
        name="edad"
        value={formData.edad}
        onChange={handleChange}
        required
      />

      <label>Altura (cm)</label>
      <input
        type="number"
        name="altura"
        value={formData.altura}
        onChange={handleChange}
        required
      />

      <label>Objetivos Personales</label>
      <textarea
        name="objetivos"
        value={formData.objetivos}
        onChange={handleChange}
        required
      />

      <label>Problemas Médicos</label>
      <textarea
        name="problemasMedicos"
        value={formData.problemasMedicos}
        onChange={handleChange}
      />

      <label>Día Preferido para Asistir</label>
      <select
        name="diasPreferidos"
        value={formData.diasPreferidos}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona un día</option>
        <option value="Martes y Jueves">Martes y Jueves</option>
        <option value="Lunes, Martes y Miércoles">
          Lunes, Martes y Miércoles
        </option>
        <option value="Lunes, Martes, Jueves y Viernes">
          Lunes, Martes, Jueves y Viernes
        </option>
      </select>

      <label>Horario Preferido</label>
      <input
        type="time"
        name="horarioPreferido"
        value={formData.horarioPreferido}
        onChange={handleChange}
        min="08:00"
        max="21:00"
        required
      />

      <button type="submit" className="submit-btn">
        Enviar Preinscripción
      </button>
    </form>
  );
};

export default PreinscriptionForm;
