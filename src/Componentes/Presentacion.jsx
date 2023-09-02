import React, { useState } from 'react';
import '../index.css'; // Asegúrate de importar tu archivo CSS aquí
import { v4 as uuidv4 } from 'uuid'; // Importar la función uuidv4 para generar IDs únicos

const Presentacion = () => {
  const [criteriaScores, setCriteriaScores] = useState({});
  const [criterios, setCriterios] = useState([
    { titulo: "Aspecto Personal", id: "Crit5" },
    { titulo: "Comunicacion Oral", id: "Crit6" }
  ]);

  const [newCriterioText, setNewCriterioText] = useState('');

  const handleScoreChange = (criterioId, score) => {
    setCriteriaScores(prevScores => ({ ...prevScores, [criterioId]: score }));
  };

  const handleDeleteCriterio = (criterioId) => {
    // Lógica para eliminar el criterio con el id proporcionado
    // Actualizar el estado 'criterios' después de eliminar
    const updatedCriterios = criterios.filter(criterio => criterio.id !== criterioId);
    setCriterios(updatedCriterios);
  };

  const handleAddCriterio = (text) => {
    // Lógica para agregar un nuevo criterio
    // Aquí puedes generar un ID único para el nuevo criterio
    const newCriterio = { titulo: text, id: uuidv4() };
    setCriterios(prevCriterios => [...prevCriterios, newCriterio]);
    setNewCriterioText(''); // Limpiar el campo de entrada después de agregar
  };

  const handleSaveScores = () => {
    // Lógica para guardar los valores numéricos ingresados en la base de datos o donde sea necesario
    console.log(criteriaScores);
  };

  return (
    <>
      <div>
        <ul id="titulo">
          <h1>PRESENTACIÓN PERSONAL Y HABILIDADES DE COMUNICACIÓN</h1>
        </ul>
        <br />

        <ul id="subtitulo">
          <h1>
            <div id="Crit">
              <i className="fa-sharp fa-solid fa-list-check"></i>
            </div>
            CRITERIOS A EVALUAR
            <i className="fa-sharp fa-solid fa-percent"></i>
          </h1>
        </ul>
        <br />

        {/* Mostrar los criterios con campos de entrada numérica */}
        {criterios.map((criterio) => (
          <div key={criterio.id} className="criterio-container">
            <div className="criterio-box">
              <div className="criterio-text-box">
                <p className="criterio-text">{criterio.titulo}</p>
              </div>
              <input
                type="number"
                className="score-input"
                value={criteriaScores[criterio.id] || ''}
                onChange={(e) => handleScoreChange(criterio.id, e.target.value)}
              />
              <button className="delete-button" onClick={() => handleDeleteCriterio(criterio.id)}>Borrar</button>
            </div>
          </div>
        ))}

        {/* Agregar nuevo criterio */}
        <div className="add-criterio-container">
          <input
            type="text"
            className="new-criterio-input"
            placeholder="Nuevo criterio"
            value={newCriterioText}
            onChange={(e) => setNewCriterioText(e.target.value)}
          />
          <button
            className="add-button"
            onClick={() => handleAddCriterio(newCriterioText)}
          >
            Agregar Criterio
          </button>
        </div>
      </div>

      <div className="save-button-container">
        <button className="save-button" onClick={handleSaveScores}>Guardar</button>
      </div>
    </>
  );
}

export default Presentacion;
