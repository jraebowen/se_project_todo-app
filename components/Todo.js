class Todo {
  constructor(data, selector, updateTodoCounter, updateTodoTotal) {
    this._data = data;
    this._todoTemplate = document.querySelector(selector);
    this._updateTodoCounter = updateTodoCounter;
    this._updateTodoTotal = updateTodoTotal;
  }

  _generateCheckboxEl() {
    this._todoCheckboxEl = this._todoElement.querySelector(".todo__completed");
    const todoLabel = this._todoElement.querySelector(".todo__label");
    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _setEventListeners() {
    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
      this._updateTodoCounter(this._data.completed);
    });
    this._todoDeleteBtn.addEventListener("click", () => {
      this._todoElement.remove();
      this._todoElement = null;
      if (this._data.completed) {
        this._updateTodoCounter(false);
      } else {
      }
      this._updateTodoTotal(false);
    });
  }

  getView() {
    this._todoElement = this._todoTemplate.content
      .querySelector(".todo")
      .cloneNode(true);
    const todoNameEl = this._todoElement.querySelector(".todo__name");
    const todoDate = this._todoElement.querySelector(".todo__date");
    this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

    todoNameEl.textContent = this._data.name;

    // If a due date has been set, parsing this it with `new Date` will return a
    // number. If so, we display a string version of the due date in the todo.
    const dueDate = new Date(this._data.date);
    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }

    this._generateCheckboxEl();
    this._setEventListeners();

    return this._todoElement;
  }
}
export default Todo;
