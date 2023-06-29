import React from 'react';

const CrudTableRow = ({zodiac, setDataToEdit, deleteData}) => {

    let {name, constellation, id} =zodiac;

    return (
        <tr>
        <td>{name}</td>
        <td>{constellation}</td>
        <td>
        <button onClick={() => setDataToEdit(zodiac)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
        </td>
    </tr>
    );
};

export default CrudTableRow;