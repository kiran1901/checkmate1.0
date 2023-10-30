import { useState } from "react"

export function TodoAdditionForm ({ addTodoProp }) {
    
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
        addTodoProp(newItem)
        setNewItem("")
    }

    return (
        <form 
            onSubmit={handleSubmit}
            className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">Hi! Welcome to CheckMate</label>
            <input 
                type="text" 
                id="item"
                value={newItem}
                onChange={e => setNewItem(e.target.value)}></input>
            </div>
            <button className="btn">Add Todo</button>
        </form>
    )

} 