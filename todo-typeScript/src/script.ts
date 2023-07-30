// const btnSubmit = document.querySelector(".todo-btn") as HTMLButtonElement;
const inputTodo = document.querySelector(".todo-input") as HTMLInputElement;
const formTodo = document.querySelector(".todo-form") as HTMLFormElement;
const todoList = document.querySelector(".todo-list") as HTMLLIElement;
const btnDeleteAll = document.querySelector(
  ".todo-delete-all"
) as HTMLButtonElement;

const handleSubmit = (e: Event) => {
  e.preventDefault();
  // Create new todo object
  const newTodo: Todo = {
    id: Date.now(),
    todo: inputTodo.value,
    completed: false,
  };

  // Todo save todo to local storage
  todos.push(newTodo);
  saveTodos();

  // Append new todo Fn
  appendTodo(newTodo);

  // Reset input
  inputTodo.value = "";
};

// save todos
const saveTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// new todo interface
interface Todo {
  id: number;
  todo: string;
  completed: boolean;
}

// New todos array
const todos: Todo[] = JSON.parse(localStorage.getItem("todos") || "[]");
console.log(todos);

// Append new todos to the DOM on start
window.addEventListener("DOMContentLoaded", () => {
  todos.forEach((todo) => appendTodo(todo));
});

// Append Todo Function
const appendTodo = (newTodo: Todo) => {
  const newLi = document.createElement("li");
  const checkB = document.createElement("input");
  checkB.type = "checkbox";
  checkB.checked = newTodo.completed;

  // add checkbox event listener
  checkB.addEventListener("change", () => {
    console.log("Checked");
    newTodo.completed = checkB.checked;

    saveTodos();
  });

  newLi.append(newTodo.todo, checkB);
  todoList.prepend(newLi);
};

formTodo.addEventListener("submit", (e) => handleSubmit(e));

const clearTodos = () => {
  todos.length = 0;
  saveTodos();
  todoList.innerHTML = "";
};
btnDeleteAll.onclick = () => clearTodos();
