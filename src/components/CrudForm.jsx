
import React, { useState } from 'react';

const initialForm ={
    id:null,
    name:"",
    constellation:""
}

const CrudForm = ({createData,updateData,dataToEdit,setDataToEdit}) => {

  const [form,setForm] =useState(initialForm)

  const handleChange =(e) =>{
      setForm({
        ...form,
        [e.target.name]:e.target.value
      })
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    if (!form.name || !form.constellation) {
     alert("Datos incompletos");
     return;
    }

    if(form.id === null){
        createData(form)
    }else{
        updateData(form);
    }
      handleReset();
  }

  const handleReset =(e) =>{
    setForm(initialForm);
    setDataToEdit(null);
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