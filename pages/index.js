import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoElement = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (values) => {
    const todoElement = generateTodo(values);
    section.addItem(todoElement);
    formValidator.resetValidation();
    addTodoPopup.close();
    addTodoForm.reset();
  },
});
addTodoPopup.setEventListeners();

//Turns a data object into a visual DOM element
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

//provides array of todo items to render (initialTodos)
// gets the DOM element from generateTodo and adds it to the page
// declares where to insert todo in DOM
const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todoElement = generateTodo(item);
    section.addItem(todoElement);
  },
  containerSelector: ".todos__list",
});
section.renderItems();

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();
