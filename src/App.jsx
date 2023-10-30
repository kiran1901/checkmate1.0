import { useEffect } from "react"
import { useState } from "react"
import "./styles.css"
import { TodoAdditionForm } from "./TodoAdditionForm"
import { TodoList } from "./TodoList"

export default function App() {
  
  const [todos, setNewTodo] = useState(() => {
    const localStorageValue = localStorage.getItem("TODOS")
    if (localStorageValue === null) return []
    return JSON.parse(localStorageValue)

  })

  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos))
  }, [todos])

  function addTodo (title) {
          setNewTodo(currentTodo => {
            return [
                ...currentTodo,
                {
                id: crypto.randomUUID(),
                title,
                completed: false
                }
            ]
        })
  }

  function toggleTodo (clickedTodoId, completed) {
    setNewTodo (currentTodo => {
      return (currentTodo.map(eachTodo => {
        if (eachTodo.id === clickedTodoId) {
          return {
            ...eachTodo,
            completed
          }
        }

        return eachTodo
      }))
    })
  }

  function deleteTodo (clickedTodoId) {
    setNewTodo(currentTodo => {
      return currentTodo.filter(eachTodo => eachTodo.id != clickedTodoId)
    })
  }


  return (
    <>
      <TodoAdditionForm addTodoProp={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

