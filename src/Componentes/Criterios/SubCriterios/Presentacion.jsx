import React, { useState } from "react";
import {
  BsArrowLeftSquareFill,
  BsArrowRightSquareFill,
  BsPlusCircleFill,
  BsTrashFill,
  BsXCircleFill,
} from "react-icons/bs"; // Importar el icono de la canasta
import "../SubCriterios/SubCriterios.css"; // Importar los estilos

const Presentacion = () => {
  const [criterios, setCriterios] = useState([
    {
      titulo: "Aspecto Personal",
      id: "SubCtrPt1",
      contenido: [
        "- Impacto general que genera el estudiante (agradable, confianza, seguridad, etc).",
        "- Forma de vestir (adecuada, llamativa, etc).",
      ],
    },
    {
      titulo: "Comunicacion Oral",
      id: "SubCtrPt2",
      contenido: [
        "- La comunicación oral se evalúa en la medida que se va desarrollando la entrevista con las preguntas que se realicen al estudiante.",
        "- Claridad, seguridad, lógica, riqueza de vocabulario.",
        "- Contacto visual.",
        "- Postura.",
        "- Gesticulación.",
        "- Tono, timbre, volumen.",
      ],
    },
  ]);

  // Estados para controlar la visibilidad de los modales
  const [showAspectoPersonalModal, setShowAspectoPersonalModal] =
    useState(false);
  const [showComunicacionOralModal, setShowComunicacionOralModal] =
    useState(false);

  // Estado para controlar el visibilidad del modal de agregar nuevo criterio
  const [showModal, setShowModal] = useState(false);

  // Estado para controlar el texto del nuevo criterio
  const [newCriterioText, setNewCriterioText] = useState("");

  // Estado para controlar si el contenido del modal está en modo de edición o no
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  // Estado para controlar el rango del dropdown
  const [criteriaDropdownRange, setCriteriaDropdownRange] = useState(5);

  // Estado para almacenar los valores seleccionados para cada criterio
  const [criteriaScores, setCriteriaScores] = useState({});

  const handleDeleteCriterio = (criterioId) => {
    const updatedCriterios = criterios.filter(
      (criterio) => criterio.id !== criterioId
    );
    setCriterios(updatedCriterios);
    // Eliminar el valor seleccionado para el criterio eliminado
    const updatedScores = { ...criteriaScores };
    delete updatedScores[criterioId];
    setCriteriaScores(updatedScores);
  };

  const handleAddCriterio = (text) => {
    const newCriterio = {
      titulo: text,
      id: text.replace(/\s+/g, "-"),
      contenido: [],
    };
    setCriterios((prevCriterios) => [...prevCriterios, newCriterio]);
    // Asignar el rango del dropdown solo si es un valor nuevo
    if (!criteriaScores[newCriterio.id]) {
      setCriteriaScores((prevScores) => ({
        ...prevScores,
        [newCriterio.id]: 0,
      }));
    }
    setNewCriterioText("");
    setShowModal(false); // Cerrar el modal de agregar después de agregar el criterio
  };

  // Funciones para mostrar/ocultar los modales
  const toggleModal = (criterioId) => {
    if (criterioId === "Crit5") {
      setShowAspectoPersonalModal((prevState) => !prevState);
      setShowComunicacionOralModal(false); // Asegúrate de ocultar el otro modal si es necesario
    } else if (criterioId === "Crit6") {
      setShowAspectoPersonalModal(false); // Asegúrate de ocultar el otro modal si es necesario
      setShowComunicacionOralModal((prevState) => !prevState);
    }
    console.log("Modal abierto para el criterio:", criterioId);
  };

  // Función para cambiar el modo de edición
  const toggleEditMode = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setEditedContent(criterios[index].contenido.join("\n"));
  };

  const handleEdit = () => {
    const updatedCriterios = [...criterios];
    updatedCriterios[editIndex].contenido = editedContent.split("\n");
    setCriterios(updatedCriterios);
    setEditMode(false);
    setEditIndex(null);
    setEditedContent("");
  };

  // Funciones para avanzar y retroceder
  const handleForward = () => {
    // Lógica para avanzar
  };

  const handleBackward = () => {
    // Lógica para retroceder
  };

  return (
    <>
      <div>
        <ul id="tituloPresentacion">
          <h1>PRESENTACIÓN PERSONAL Y HABILIDADES DE COMUNICACIÓN</h1>
        </ul>
        <br />

        <ul id="subtituloPresentacion">
          <h2>
            <div id="Crit">
              <i className="fa-sharp fa-solid fa-list-check"></i>
            </div>
            CRITERIOS A EVALUAR
            <i className="fa-sharp fa-solid fa-percent"></i>
          </h2>
        </ul>
        <br />

        {/* Renderizar los criterios y sus respectivos modales */}
        {criterios.map((criterio, index) => (
          <div key={criterio.id}>
            <div className="criterio-box">
              <button
                className="criterio-button-presentacion"
                onClick={() => toggleModal(criterio.id)}
              >
                {criterio.titulo}
              </button>
              {/* Dropdown para seleccionar puntaje */}
              <select
                className="score-dropdown"
                value={criteriaScores[criterio.id] || 0}
                onChange={(e) =>
                  setCriteriaScores({
                    ...criteriaScores,
                    [criterio.id]: e.target.value,
                  })
                }
              >
                {[...Array(criteriaDropdownRange + 1).keys()].map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
              {/* Botón para borrar con icono de la canasta */}
              <button
                className="delete-button"
                onClick={() => handleDeleteCriterio(criterio.id)}
              >
                <BsTrashFill />
              </button>
              {/* Botón para editar */}
            </div>
          </div>
        ))}

        {/* Modales para los criterios */}
        {criterios.map((criterio, index) => (
          <div key={criterio.id}>
            {showAspectoPersonalModal && criterio.id === "Crit5" && (
              <div className="modal-sub">
                <div className="modal-content-sub">
                  <i className="fa-solid fa-list"></i>
                  <h1>Para tener en cuenta</h1>
                  <h2>{criterio.titulo}</h2>
                  {editMode && editIndex === index ? (
                    <textarea
                      className="edith-sub"
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                    ></textarea>
                  ) : (
                    criterio.contenido.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))
                  )}
                  {/* Botones para cerrar y editar/guardar */}
                  <button className="btn-sub" onClick={() => toggleModal(criterio.id)}>
                    Cerrar
                  </button>
                  {editMode && editIndex === index ? (
                    <button className="btn-sub" onClick={handleEdit}>Guardar</button>
                  ) : (
                    <button className="btn-sub" onClick={() => toggleEditMode(index)}>
                      Editar
                    </button>
                  )}
                </div>
              </div>
            )}

            {showComunicacionOralModal && criterio.id === "Crit6" && (
              <div className="modal-sub">
                <div className="modal-content-sub">
                  <i className="fa-solid fa-list"></i>
                  <h1>Para tener en cuenta</h1>
                  <h2>{criterio.titulo}</h2>
                  {editMode && editIndex === index ? (
                    <textarea
                      className="edith-sub"
                      value={editedContent}
                      onChange={(e) => setEditedContent(e.target.value)}
                    ></textarea>
                  ) : (
                    criterio.contenido.map((item, i) => (
                      <p key={i}>{item}</p>
                    ))
                  )}
                  {/* Botones para cerrar y editar/guardar */}
                  <button className="btn-sub" onClick={() => toggleModal(criterio.id)}>
                    Cerrar
                  </button>
                  {editMode && editIndex === index ? (
                    <button className="btn-sub" onClick={handleEdit}>Guardar</button>
                  ) : (
                    <button className="btn-sub" onClick={() => toggleEditMode(index)}>
                      Editar
                    </button>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="add-crit">
          {/* Botón para abrir el modal de agregar nuevo criterio */}
          <button className="add-button " onClick={() => setShowModal(true)}>
            <BsPlusCircleFill />
          </button>

          {/* Contenedor para los botones de adelante y atrás */}
          <div className="navigation-buttons">
            <button className="forward-button" onClick={handleForward}>
              <BsArrowLeftSquareFill />
            </button>
            <button className="backward-button" onClick={handleBackward}>
              <BsArrowRightSquareFill />
            </button>
          </div>
        </div>
      </div>

      {/* Modal para agregar un nuevo criterio */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <input
              className="tex"
              type="text"
              placeholder="Nuevo criterio"
              value={newCriterioText}
              onChange={(e) => setNewCriterioText(e.target.value)}
            />
            {/* Input para definir el rango del dropdown */}
            <input
              type="number"
              className="dropdown-range-input"
              placeholder="Rango del dropdown"
              value={criteriaDropdownRange}
              onChange={(e) => setCriteriaDropdownRange(e.target.value)}
              min="0"
              step="1"
            />
            <button
              className="add"
              onClick={() => handleAddCriterio(newCriterioText)}
            >
              Agregar
            </button>
            <button
              className="close-button "
              onClick={() => setShowModal(false)}
            >
              <BsXCircleFill />
            </button>{" "}
            {/* Botón para cerrar el modal */}
          </div>
        </div>
      )}
    </>
  );
};

export default Presentacion;
