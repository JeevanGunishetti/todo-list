const express = require("express");
const router = express.Router();
const {addTodo, getTodos, updateTodo} = require("../controllers/todos");


console.log("helo");

router.get("/getTodos", getTodos);

router.post("/addTodos", addTodo);

router.post("/toggleTodo", updateTodo);

module.exports = router;
