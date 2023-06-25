import React from 'react';

const CrudTableRow = ({zodiac}) => {
    return (
        <tr>
        <td>{zodiac.name}</td>
        <td>{zodiac.constellation}</td>
        <td>
        <button>Editar</button>
        <button>Eliminar</button>
        </td>
    </tr>
    );
};

export default CrudTableRow;