const dateElement = document.getElementById("local-date");
const formattedDate = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});
dateElement.innerText = formattedDate;

let idCounter = 0;

function createListItem(id, text) {
  const listItem = document.createElement("li");
  listItem.className = "list-group-item p-3";
  listItem.innerHTML = `
    <input class="form-check-input me-1" id="todo-${id}" type="checkbox" />
    <label class="form-check-label" for="todo-${id}">
      ${text}
    </label>
  `;
  return listItem;
}

function updateLocalStorage(todoItems) {
  localStorage.setItem("todoItems", JSON.stringify(todoItems));
}

document.getElementById("button-addon1").addEventListener("click", function () {
  const inputElement = document.getElementById("todo-input");
  const inputValue = inputElement.value;
  idCounter++;

  const listItem = createListItem(idCounter, inputValue);
  const listParent = document.getElementById("todo-list");
  listParent.appendChild(listItem);

  inputElement.value = "";

  const todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];
  todoItems.push({ id: idCounter, text: inputValue });
  updateLocalStorage(todoItems);

  const checkBoxElement = document.getElementById(`todo-${idCounter}`);
  checkBoxElement.addEventListener("change", function () {
    const labelElement = this.nextElementSibling;

    if (this.checked) {
      const strikeElement = document.createElement("strike");
      strikeElement.textContent = labelElement.textContent;
      labelElement.textContent = "";
      labelElement.appendChild(strikeElement);
    } else {
      const strikeElement = labelElement.querySelector("strike");
      if (strikeElement) {
        labelElement.textContent = strikeElement.textContent;
        strikeElement.remove();
      }

      const updatedTodoItems = todoItems.filter(item => item.id !== idCounter);
      updateLocalStorage(updatedTodoItems);
    }
  });
});

// Listen for Enter key press on the input element
document.getElementById("todo-input").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default Enter key behavior (e.g., new line)
      document.getElementById("button-addon1").click(); // Trigger the button click event
    }
  })

document.getElementById("clearAll-btn").addEventListener("click", function () {
  const listParent = document.getElementById("todo-list");
  while (listParent.firstChild) {
    listParent.removeChild(listParent.firstChild);
  }
  localStorage.clear();
});

// Window loaded event
window.addEventListener("DOMContentLoaded", function () {
  const listParent = document.getElementById("todo-list");
  const storedTodoItems = JSON.parse(localStorage.getItem("todoItems")) || [];

  storedTodoItems.forEach(item => {
    const listItem = createListItem(item.id, item.text);
    listParent.appendChild(listItem);

    const checkBoxElement = document.getElementById(`todo-${item.id}`);
    checkBoxElement.addEventListener("change", function () {
      const labelElement = this.nextElementSibling;

      if (this.checked) {
        // Strikethrough logic...
      } else {
        const strikeElement = labelElement.querySelector("strike");
        if (strikeElement) {
          labelElement.textContent = strikeElement.textContent;
          strikeElement.remove();
        }

        const updatedTodoItems = storedTodoItems.filter(item => item.id !== item.id);
        updateLocalStorage(updatedTodoItems);
      }
    });
  });
});
