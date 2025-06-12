import Popup from "./Popup.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".popup__form");
  }

  //get data from forms
  _getInputValues() {
    const formData = new FormData(this._form);
    const values = Object.fromEntries(formData);
    const name = values.name;
    const dateInput = values.date;
    const id = uuidv4();

    // Create a date object and adjust for timezone
    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    return { name, date, id };
  }

  //submit event listener that passes the data form froms to the submit handler in index.js
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}

export default PopupWithForm;
