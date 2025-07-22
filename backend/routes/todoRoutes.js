import express from "express";
import {
  getTodos,
  addTodo,
  showTodo,
  editTodo,
  deleteTodo,
  getAllTodos
} from "../controller/todoController.js";
import { protect } from "../middleware/authMiddliware.js";

const router = express.Router();
// shows all todos
router.get("/all_todos", getAllTodos);
// shows all the user todos
router.route("/todos").get(protect, getTodos);
// add todo
router.route("/todo").post(protect, addTodo);
// show single todo
router.get("/todo/:id", showTodo);
// update todo
router.route("/todo/:id").put(protect, editTodo);
// delete todo
router.route("/todo/:id").delete(protect, deleteTodo);

export default router;
