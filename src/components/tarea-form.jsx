import React, {useState} from "react";
import '../estilos/tarea-input.css';
import { v4 as uuidv4 } from 'uuid';

function TareaForm(props){
    
    const [inputValue, setInputValue] = useState('');

    const manejarCambio = e => {
        setInputValue(e.target.value);
        console.log(e.target.value);
    }

    const manejarEnvio = e =>{
        e.preventDefault();

        const tareaNueva = {
            id: uuidv4(),
            texto: inputValue,
            completada: false
        }

        props.onSubmit(tareaNueva);
        setInputValue('');
    }

    return(
        <form 
            className='tarea-form'
            onSubmit={manejarEnvio}>
            <div>
                <input 
                    className='tarea-input'
                    type='text'
                    placeholder='Agregar nueva tarea...'
                    name='texto' 
                    value={inputValue} 
                    onChange={manejarCambio}          
                />
             
                <button className='tarea-boton'>
                <h3>+</h3>
                </button>
            </div>
        </form>
    );
}

export default TareaForm;