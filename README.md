# Simple Todo App

This is a simple to-do app that was built by the TripleTen team and refactored by me to leverage classes and modules.

## Functionality

This app allows users to:

- ➕ Add new to-dos with task names and due dates
- ✅ Mark tasks as completed or uncompleted
- ❌ Delete tasks from the list
- 📊 Dynamic counter showing **total tasks vs. completed tasks**
- 🔒 Real-time **form validation** with inline error messages and disabled submit button for invalid inputs
- 🆔 Unique IDs generated for each task using the `uuid` package

## Technology

Pre-built by TripleTen team: HMTL, CSS
Refactored by me:

- JavaScript - refactored files to follow OOP principles which includes modular classes
- UUID - generates unique IDs for tasks

## Project Structure

```bash
src/
├── components/
│   ├── Todo.js          # Todo class for individual tasks
│   ├── Section.js       # Renders and manages task lists
│   ├── TodoCounter.js   # Tracks and updates total/completed counts
│   ├── Popup.js         # Base popup class
│   ├── PopupWithForm.js # Popup with form submission handling
│   ├── FormValidator.js # Reusable form validation logic
├── utils/
│   ├── constants.js     # Initial data and validation config
├── index.html           # Entry point
└── index.js             # Main app logic
```

## Deployment & Demo

This project is deployed on GitHub Pages:
https://jraebowen.github.io/se_project_todo-app/

Here is demo of the project:
https://drive.google.com/file/d/1PsOHGujGLOrzKrPuaLcJ-Dn1Ov-Mm0uo/view?usp=drive_link
