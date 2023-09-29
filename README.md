# To-Do List Web App 


This repository contains the source code for a simple To-Do List web application built using HTML, CSS, and JavaScript. The app allows users to add and remove tasks, mark them as completed with strikethrough, and persist their tasks in local storage. Below, you'll find an overview of the code and its functionality.

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
  - [Date Display](#date-display)
  - [Task Creation](#task-creation)
  - [Local Storage](#local-storage)
  - [Event Listeners](#event-listeners)
- [Contributing](#contributing)
- [License](#license)

## Overview

This web application provides a simple interface for managing a to-do list. It includes the following features:

- Displaying the current date in a specific format.
- Adding tasks to the list.
- Marking tasks as completed with strikethrough.
- Persisting tasks in local storage.
- Clearing all tasks from the list and local storage.

## Usage

To use the To-Do List web application, follow these steps:

1. Clone or download this repository to your local machine.

2. Open the `index.html` file in a web browser.

3. You will see the current date displayed at the top of the page. Below that, you can enter tasks in the input field and press "Enter" or click the "Add Task" button to add them to the list.

4. Tasks are displayed as checkboxes with labels. You can mark a task as completed by checking its checkbox, which will apply a strikethrough effect to the task label.

5. To remove a task, simply uncheck its checkbox.

6. To clear all tasks from the list and local storage, click the "Clear All" button.

## Code Explanation

### Date Display

The current date is displayed at the top of the page using JavaScript's `Date` object and the `toLocaleDateString` method. The date format includes the weekday, year, month, and day.

### Task Creation

Tasks are created dynamically in the JavaScript code using the `createListItem` function. Each task is represented as an `<li>` element with a checkbox input and a label.

### Local Storage

Tasks are stored in local storage using the `localStorage` API. Tasks are stored as an array of objects with `id` and `text` properties. This allows tasks to be retrieved and displayed when the page is refreshed.

### Event Listeners

Event listeners are used to handle user interactions:

- Clicking the "Add Task" button or pressing "Enter" in the input field adds a new task to the list and updates local storage.

- Checking or unchecking a task's checkbox updates the task's appearance and may also update the local storage data.

- Clicking the "Clear All" button removes all tasks from the list and clears the local storage.

- The `DOMContentLoaded` event listener ensures that tasks from local storage are loaded and displayed when the page is first loaded.

## Contributing

Contributions to this project are welcome. If you have suggestions for improvements or find any issues, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Enjoy using the To-Do List web application! If you have any questions or need further assistance, feel free to contact us.
