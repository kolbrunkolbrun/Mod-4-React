import React from "react";

function TodoItem (Props) {

    //inline style function
    const completedStyle = {
        fontStyle: "italic",
        color: "#cdcdcd",
        textDecoration: "line-through"
    }

    return (
    <div className="todo-item">
            <input 
            type="checkbox" 
            checked={Props.item.completed}
            //this is an empty function that calls the Props.handleChange and passes the ID to it
            onChange={() => Props.handleChange(Props.item.id)}
            />
            {/* conditional rendering inside <p>, says if item is completed, use completedStyle, if not, do nothing*/ }
            <p style={Props.item.completed ? completedStyle: null}>{Props.item.text}</p>
    </div>
)}

export default TodoItem