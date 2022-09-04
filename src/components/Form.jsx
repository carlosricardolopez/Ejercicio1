import React, { useState } from 'react';
import Todo from '../components/Todo';
import Select from 'react-select';
import productos from './datos';

const Form = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([])
    var precio;
    const handleChange = e => { const fund = productos.find(element => element.value == e.value)
        precio = fund.precio;
        setTodo({["todo"]: e.value, ["precio"]: precio, ["subtotal"]: cantidad});
} 
var sub = 0;
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === ''){
            alert('El campo no puede estar vacio')
            return
        }
        setTodos([...todos, todo])
    }
    const deleteTodo = indice =>{
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    var cantidad = 1;
    const cantproducto = cant =>{
        cantidad = cant;
    }
return (
    <>
    <form onSubmit={e => e.preventDefault()}>
        <label>Agregar producto</label><br />
        <Select options={productos} className="Picker" name="todo" onChange={handleChange}/>
        <label id='cant'>Cantidad</label>
        <input type="number" classname='cantidad' min="1" max="10" defaultValue={1} onChange={(e) => cantproducto(e.target.value)}/>
        <button onClick={handleClick}>Agregar</button>
    </form>
    {
        todos.map((value, index) => (
        <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} preciounit={value.precio} subtotal={value.subtotal}/>
        ))
    }
    </>
)
}
export default Form