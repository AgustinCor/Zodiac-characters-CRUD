import React, { useState } from 'react';

const initialForm = {
    name:"",
    constellation:"",
    id:null,
}

const CrudForm = () => {
   const [form,setForm] =useState(initialForm)

    const handleChange =(e)=>{}

    const handleSubmit =(e) => {}

    const handleReset =(e) =>{}

    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={form.name} type="text" name='name' placeholder='Nombre'/>
                <input onChange={handleChange} value={form.constellation} type="text" name='constellation' placeholder='Constelation'/>
                <input type="submit" value='Enviar'/>
                <input onClick={handleReset} type='reset' value='Limpiar'/>
            </form>
        </div>
    );
};

export default CrudForm;