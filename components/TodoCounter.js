class TodoCounter {
  // todos should be the array of initial todos
  // selector is the selector for the counter text element
  constructor(todos, selector) {
    this._element = document.querySelector(selector); // select the appropriate element
    this._completed = todos.filter((todo) => todo.completed).length; // number of completed todos
    this._total = todos.length; // the total number of todos
    this._updateText();
  }

  updateCompleted = (increment) => {
    if (increment) {
      this._completed += 1;
    } else {
      this._completed -= 1;
    }
    this._updateText();
  };

  // Call this when a to-do is deleted, or when a to-do is
  // created via the form.
  // if increment is true, add 1 to this._total. Otherwise,
  // subtract 1. In either case, call the method to update the
  // text content.
  updateTotal = (increment) => {
    if (increment) {
      this._total += 1;
    } else {
      this._total -= 1;
    }
    this._updateText();
  };

  // Sets the text content of corresponding text element.
  _updateText() {
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;
