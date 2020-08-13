import React from "react";
import {toggleTodo, searchTodo, deleteTodo, filterTodo} from "./util.js";
import {TodoList} from "./list.js";

let id=2;
export class Todos extends React.Component{
  state ={
    Todos:[
            {
              text: "Hello1",
              id:0,
              status:"ACTIVE",
            },
            {
              text: "todolist2",
              id:1,
              status:"COMPLETED",
            },

    ],
    filter:"ALL",
    search : "",

  };

  addTodo = (e) => {
		if (e.key === "Enter") {
			const value =
				e.target.value;
			if (value.trim() !== "") {
				this.setState({
					todos: [
						{
							text: value,
							id: id++,
						},
						...this.state
							.todos,
					],
				});
				e.target.value = "";
			}
		}
	};

  applyfilter = (filter) => (ev) => {
    this.setState({filter});
  };

  toggoleTodo =(id) => (ev) => {
    this.setState({
      todos: toggleTodo(this.stats.todos, id),
    });
  };

  deleteTodo =(id) => (ev) => {
    this.setState({
      todos: deleteTodo(this.state.todos, id),
    });
  };

  gettodos=() => {
    return searchTodo(filterTodo(this.state.todos, this.state.filter),this.state.search);
  };

  componentDidCatch() {}

  render(){
    return(<div>
            <h1>Todos</h1>

            <input placeholder="add todo to list" type="text" className="addToTodo" onkeyDown={this.addTodo}/>

            <input placeholder="Search todo" type="text" className="searchTodo" value={this.state.search}/>


            <TodoList className ="todolist" search ={this.state.search} todos={this.gettodos()} toggleTodo ={this.toggleTodo}/>

            <div>{
              ["ALL","ACTIVE", "COMPLETED"].map((filter) => (
                <button key={filter} onClick = {this.applyfilter(filter)}>{filter}</button>
              ))
            }
            </div>


          </div>);
  };


};
