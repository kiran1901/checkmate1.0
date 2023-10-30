export function TodoList ({ todos, toggleTodo, deleteTodo }) {
    return (
        <ul className="list"> 
            {todos.length === 0 && "Add Some Todo's!!"}
            {todos.map(eachTodo => {
            return [
                <div className="todo-list-container" key={eachTodo.id}>
                    <div>
                        <label>
                            <input checked={eachTodo.completed} onChange={e => toggleTodo(eachTodo.id, e.target.checked)} type="checkbox"/>
                                {eachTodo.title}
                        </label>
                    </div>
                    <li
                        >
                    <button className="btn btn-danger" onClick={() => deleteTodo(eachTodo.id)}>
                        Delete
                    </button>
                    </li>
                </div>
            ]
            })}
        </ul>
    )
}