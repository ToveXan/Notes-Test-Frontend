import React from "react";

export default function TodoItem(props) {
  const handleClick = (id) => {
    props.handleDelete(id)
  }
    return (
        <li key={props.item.id}>{props.item.task} <button onClick={() => handleClick(props.item.id)}>x</button></li>
    
    )
}