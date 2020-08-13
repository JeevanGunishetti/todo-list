const Todo = require("../models/todos");

exports.addTodo = (req, res)=>{
  const {text} = req.body;
  const status = "Active";

  const newTodo = new Todo({text, status});
  Todo.findOne({text}).exec((err,todo) =>{
    if(err){
      return res.status(400).json({
        err: "Something went wrong!."
      });
    }
    if(todo.status === "Active"){
      return res.status(401).json({
        error: "Todo is already existed. Try with other name."
      });
    }

    newTodo.save((err, todoData)=>{
      if(err)
      {
        return res.status(400).json({
          error: "Something went wrong while saving the Todo."
        });
      }
      return res.status(200).json({
        message:`The todo ${text} has added succesfully.`
      });
    });
  });
};

exports.updateTodo = (req, res)=>{
  const {todoid, status} = req.body;
  Todo.updateOne({_id:new mongodb.ObjectID(todoid)} ,{$set:{status,},}).exec((err, todo)=>{
    if(err){
      return res.status(400).json({
        err: "Something went wrong in toggling the status."
      });
    }
    return res.status(200).json({
      message:"Successfully toggled the status."
    });

  });
};

exports.getTodos = (req,res) =>{
  Todo.find({}).toarray((err, todos) =>{
    if(err)
    {
      return res.status(400).json({
        err:"something went wrong."
      });
    }
    todos.forEach({_id, text, status} =>({
      id:_id,
      text,
      status
    }));
    return res.status(200).json({
      message:"Successfully add the todo to list."
    });

  })
};
