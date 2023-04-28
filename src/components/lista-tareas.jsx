import React, {useState, useEffect} from "react";
import TareaForm from "./tarea-form";
import Task from "./tareas";
import '../estilos/lista-tareas.css';

function TaskList(){

    const [tareasP, setTareasP] = useState([]);

    const agregarTarea = tareaP => {
        if (tareaP.texto.trim()){
            tareaP.texto =tareaP.texto.trim();

            const tareasActualizadas = [tareaP, ...tareasP];
            setTareasP(tareasActualizadas);
            actualizarTareasLocalStorage(tareasActualizadas); 
        }    
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareasP.filter(tareasP => tareasP.id !== id);
        setTareasP(tareasActualizadas);
        eliminarTareaLocalStorage(id);
    }

    const completarTarea = id => {
        const tareasActualizadas =tareasP.map(tareasP => {
            if (tareasP.id === id){
                tareasP.completada = !tareasP.completada; 
            }
            return tareasP;
        });
        setTareasP(tareasActualizadas);
    }

    const actualizarTareasLocalStorage = (tareas) => {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    };

    const eliminarTareaLocalStorage = id => {
        const tareasActualizadas = tareasP.filter(tareasP => tareasP.id !== id);
        setTareasP(tareasActualizadas);
        localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
    }

    useEffect(() => {
        const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
        if (tareasGuardadas) {
            setTareasP(tareasGuardadas);
        }
    }, []);
    
        
    return(
        <>
        <TareaForm onSubmit={agregarTarea} />
        <div className='list-container'>
            {
                tareasP.map((tarea)=>
                <Task
                    key={tarea.id}
                    id={tarea.id}
                    texto = {tarea.texto}
                    completada = {tarea.completada}
                    eliminarTarea={eliminarTarea}
                    completarTarea={completarTarea} />
                )
            }
        </div>
    
        </>
    );
   

}

export default TaskList;