import React, { useState } from 'react';
import '../index.css'; 


export function Ficha(){
    return(
        <>
        <div>
            <ul id= "titulo">
                <h1>FICHA DE ENTREVISTA ESTUDIANTES DE PREGRADO FI
                </h1>
            </ul>    
            <br></br>
            <ul id= "subtitulo">          
                <h1>
                  <div id = "Crit">
                    <i class="fa-sharp fa-solid fa-list-check"></i>
                 </div> 
                   CRITERIOS A EVALUAR
                  <i class="fa-sharp fa-solid fa-percent"></i>
                </h1>       
            </ul>  
            <br></br>
            
            <button className="Crit1" >
                Presentacion Personal y Habilidades de Comunicación
                <div id = "Delete">
                  <i className="fa-regular fa-trash-can"></i>
                </div>
            </button>     
            <button className="PorC1">
                 10
            </button>  
            <br></br>
            <button className="Crit2">
                Habilidades de Relaciones Personales y Contexto Educativo
                <div id = "Delete">
                  <i className="fa-regular fa-trash-can"></i>
                </div> 
            </button>
            <button className="PorC1">
                 10
            </button> 
              <br></br>
            <button className="Crit3">
                Motivacion, Personalidad y Autoevaluación
                <div id = "Delete">
                  <i className="fa-regular fa-trash-can"></i>
                </div> 
            </button>
            <button className="PorC1">
                 10
            </button> 
              <br></br>
            <button className="Crit4">
                Metas Personales y Visión
                <div id = "Delete">
                  <i className="fa-regular fa-trash-can"></i>
                </div> 
            </button>
            <button className="PorC1">
                 10
            </button> 
        </div>
      <div id = "add">
        <i class="fa-solid fa-circle-plus"></i>
      </div> 
      <div id = "next">
        <i class="fa-solid fa-square-arrow-right"></i>
      </div> 
      </>
      )
  }
