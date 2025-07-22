import { Todo, User } from "../models/models.js";

// get all the todos on the database
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll({
      include: [
        {
          model: User
        }
      ],
      order: [["createdAt", "DESC"]]
    });

    res.status(200).json({ todos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// gets all the user todos
const getTodos = async (req, res) => {
  const userId = req.user;
  try {
    const userTodos = await Todo.findAll({
      include: [
        {
          model: User
        }
      ],
      order: [["createdAt", "DESC"]],
      where: { userId: userId }
    });
    res.status(200).json({ userTodos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// adds a todo
const addTodo = async (req, res) => {
  const { title, body } = req.body;
  const userId = req.user;
  if (!title || !body) {
    res.status(400).json({ message: "error: all the fields are required" });
    return;
  }
  if (!userId) {
    res
      .status(401)
      .json({ message: "you are not authorized to perform this oparation" });
    return;
  }
  try {
    const isLiked = false;
    const todo = await Todo.build({
      title,
      body,
      isLiked,
      userId
    });
    await todo.save();
    res.status(201).json({
      title,
      body
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// shows a single todo
const showTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findOne({ where: { id } });
    if (todo === null) {
      res
        .status(404)
        .json({ message: "the resource you are looking is not found" });
    } else {
      res.status(200).json({ todo });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// update  todo
const editTodo = async (req, res) => {
  const { title, body, isLiked } = req.body;
  const { id } = req.params;
  const userId = req.user;
  // checks if users input are not blank
  if (!title || !body) {
    res.status(400).json({ message: "error: all the fields are required" });
    return;
  }
  try {
    const todo = await Todo.findOne({ where: { id } });
    // checks if the user one authorized to peform the operation
    if (userId == todo.userId) {
      const updatedTodo = await Todo.update(
        {
          title,
          body,
          isLiked,
          updatedAt: new Date()
        },
        {
          where: {
            id
          }
        }
      );
      res.status(200).json({ title, body });
    } else {
      res
        .status(401)
        .json({ message: "you are not authorized to update this record" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// delete  todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const userId = req.user;
  try {
    const todo = await Todo.findOne({ where: { id } });
    // checks if the user one authorized to peform the operation
    if (userId == todo.userId) {
      await Todo.destroy({
        where: {
          id
        }
      });
      res.status(200).json({ message: "the record was successfully deleted" });
    } else {
      res
        .status(401)
        .json({ message: "you are not authorized to delete this record" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getAllTodos, getTodos, addTodo, showTodo, editTodo, deleteTodo };
