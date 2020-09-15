import React from 'react';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';


function GenerateTodo() {
  return (
    <div className="Generate-Todo">
        <Typography variant='h1'>Todo Stream</Typography>
          <hr />
          <TodoList />
    </div>
  );
}

export default GenerateTodo;
