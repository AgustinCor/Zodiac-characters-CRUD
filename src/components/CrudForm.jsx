
import React, { useState } from 'react';

const initialForm ={
    id:null,
    name:"",
    constellation:""
}

const CrudForm = () => {

  const [form,setForm] =useState(initialForm)

  const handleChange =(e) =>{
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })
  }

  const handleSubmit =(e) =>{

  }

  const handleReset =(e) =>{

  }

    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name='name' placeholder='name'/>
                <input onChange={handleChange} type="text" name='constellation' placeholder='constellation'/>
                <input type="submit" value="Enviar" />
                <input onClick={handleReset} type="reset" value="Limpiar" />
            </form>
        </div>
    );
};

export default CrudForm;