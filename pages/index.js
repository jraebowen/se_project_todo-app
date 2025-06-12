import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.forms["add-todo-form"];

//tracks and displays the number of to-do and completed items
const todoCounter = new TodoCounter(initialTodos, ".counter__text");
function updateTodoCounter(completed) {
  todoCounter.updateCompleted(completed);
}

function updateTodoTotal(total) {
  todoCounter.updateTotal(total);
}

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

const addTodoPopup = new PopupWithForm(
  {
    popupSelector: "#add-todo-popup",
    handleFormSubmit: (values) => {
      const todoElement = generateTodo(values);
      section.addItem(todoElement);
      formValidator.resetValidation();
      addTodoPopup.close();
      addTodoForm.reset();
    },
  },
  updateTodoTotal
);
addTodoPopup.setEventListeners();

//Turns a data object into a visual DOM element
const generateTodo = (data) => {
  const todo = new Todo(
    data,
    "#todo-template",
    updateTodoCounter,
    updateTodoTotal
  );
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

// const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();
