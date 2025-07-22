import User from "./user.js";
import Todo from "./todo.js";

User.hasMany(Todo);
Todo.belongsTo(User);

export { User, Todo };
