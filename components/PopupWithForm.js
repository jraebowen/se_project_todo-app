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
    const formData = {};
    this._form.forEach((input) => {
      formData[input.name] = input.value;
    });
    return formData;
  }

  //submit event listener that passes the data from forms to the submit handler in index.js
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}

export default PopupWithForm;
