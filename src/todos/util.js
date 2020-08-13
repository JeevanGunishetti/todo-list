export const toggleTodo = (todos, todoid)=>{
  return todos.map((todo)=>
    todo.id === todoid ? {...todo, status: todo.status === "ACTIVE" ? "COMPLETED" : "ACTIVE", } : todo
  );
};

export const deleteTodo =(todos, todoid) => {
  return todos.filter((todo)=>
    todo.id !== todoid
  );
};

export const searchTodo = (todos, search) => {
  return todos.filter((todo) => todo.text.indexOf(search) !== -1);
};

export const filterTodo =(todos , filter) =>{
  switch(filter)
  {
    case "ACTIVE":
    case "COMPLETED": {
      return todos.filter((todo) =>
        todo.status === filter
      );

    }
    default:
        return todos;
  }
};
