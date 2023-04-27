import React from "react";
import '../estilos/tareas.css';

function Task({ id, texto, completada, completarTarea, eliminarTarea }) {
    return (
                    
        <div className={completada ? 'tarea-to-do completada' : 'tarea-to-do'}>
            <div 
                className="text-area"
                onClick = {() => completarTarea(id)}>
                {texto}
            </div>
            
            <div 
                className='tarea-contenedor-iconos'
                onClick={() => eliminarTarea(id)}>
                <button className="tareas-btn"><h2>-</h2></button>
            </div>  
        </div>

    );
}

export default Task;