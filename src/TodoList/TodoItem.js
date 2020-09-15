import React from "react";

export default function TodoItem(props) {
  const handleClick = (id) => {
    props.handleDelete(id)
  }

  const checkUser = (userId) => {
    props.users.map(user => {
      if (user.id === userId) {
        return console.log(user.username)
      }
    });
    // if (userId === props.users.id) {
    //   console.log(props.users.username)
    // } else {
    //   console.log(props.users.id)
    // }
  } 
  
    return (
        <div key={props.item.id}>
        <button onClick={() => checkUser(props.item.user_id)}>username</button>
        <h2>{props.item.title} <button onClick={() => handleClick(props.item.id)}>x</button></h2>
        <p>{props.item.description}</p> 
        
        </div>
    
    )
}