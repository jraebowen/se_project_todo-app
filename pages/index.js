import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.forms["add-todo-form"];

//tracks and displays the number of to-do and completed items
const todoCounter = new TodoCounter(initialTodos, ".counter__text");
function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}
function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
  todoCounter.updateTotal(false);
}

function handleAdd() {
  todoCounter.updateTotal(true);
}

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

function addTodoElement(item) {
  const todoElement = generateTodo(item);
  section.addItem(todoElement);
}

const addTodoPopup = new PopupWithForm(
  {
    popupSelector: "#add-todo-popup",
    handleFormSubmit: (values) => {
      const name = values.name;
      const dateInput = values.date;
      const id = uuidv4();

      // Create a date object and adjust for timezone
      const date = new Date(dateInput);
      date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
      const cardData = { name, dateInput, id };
      addTodoElement(cardData);
      addTodoPopup.close();
      handleAdd(true);
      formValidator.resetValidation();
    },
  },
  handleDelete
);
addTodoPopup.setEventListeners();

//Turns a data object into a visual DOM element
const generateTodo = (data) => {
  const todo = new Todo(
    data,
    "#todo-template",
    handleCheck,
    handleAdd,
    handleDelete
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
    addTodoElement(item);
  },
  containerSelector: ".todos__list",
});
section.renderItems();

// const todoCheckboxEl = this._todoElement.querySelector(".todo__completed");

const formValidator = new FormValidator(validationConfig, addTodoForm);
formValidator.enableValidation();
