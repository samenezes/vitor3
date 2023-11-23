import { useState } from 'react'

const TodoForm = ({ addTodo }) => {

    const [value, setValue] = useState("")
    const [categoria, setCategoria] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault() 
        if(!value || !categoria) return 
        console.log(value, categoria)
        
        addTodo(value, categoria)
        setValue("")
        setCategoria("")

    }
    
    return (
        <div className="todo-form">
            <h2>Criar tarefa:</h2>
            <form onSubmit={handleSubmit}> 
                <input type="text" placeholder="Digite o titulo" value={value} onChange={(e) => setValue(e.target.value)}></input>
                <select value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Calor">Calor</option>
                    <option value="Agradavel">Agradavel</option>
                    <option value="Frio">Frio</option>
                </select>
                <button type="submit">Adicionar</button>
            </form>
        </div>
    )
}

export default TodoForm
