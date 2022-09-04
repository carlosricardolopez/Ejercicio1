import React from 'react';

const Todo = ({todo, index, deleteTodo, preciounit, subtotal}) => {
return (
    <>
    <div className='list'>
        <h3>{todo}</h3><span className='unitario'>{preciounit}</span> <div>{subtotal}</div><button className='btn-delete'onClick={() => deleteTodo(index)} title="Eliminar de la lista">X</button>
    </div>
    </>
)
}
export default Todo
