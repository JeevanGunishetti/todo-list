import React from "react";

export const TodoList = ({search, todos, toggleTodo, className}) => {
  return(
    <div className ={className}>
      {
        todos.map((todo) =>
          <div key ={className} className = {"item" + todo.status} onClick = {toggleTodo(todo)} style={{textdecoration: todo.statu === "COMPLETED" ? "line-through": "none"}}>
            <span> dangerouslySetInnerHTML={{
							__html: todo.text
								.split(search)
								.join(`<span style='color: yellow;'>${search}</span>`),
						}}</span>
          </div>
        )
      }

    </div>
  );
};
