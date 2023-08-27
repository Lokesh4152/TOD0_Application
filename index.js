const dateElement = document.getElementById("local-date");
const formattedDate = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  year: "numeric",
  month: "short",
  day: "numeric",
});
dateElement.innerText = formattedDate;

let idCounter = 0; // Initialize idCounter to match the current IDs in the HTML

document.getElementById("button-addon1").addEventListener("click", function () {
  const inputElement = document.getElementById("todo-input");
  const inputValue = inputElement.value;
  


  idCounter++; // Increment the idCounter

  const listItem = document.createElement("li");
  listItem.className = "list-group-item p-3";

  listItem.innerHTML = `
    <input class="form-check-input me-1" id="todo-${idCounter}" type="checkbox" />
    <label class="form-check-label" for="todo-${idCounter}">
      ${inputValue}
    </label>
  `;

  const listParent = document.getElementById("todo-list");
  listParent.appendChild(listItem);

  inputElement.value = "";

    //storing in the local storage 
    const todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];
    todoItems.push({ id: idCounter, text: inputValue });
    localStorage.setItem("todoItems", JSON.stringify(todoItems));

  // Get the newly created checkbox element by its ID
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
      localStorage.setItem("todoItems", JSON.stringify(updatedTodoItems));

    }
  });
});
// clear all functionality 

document.getElementById("clearAll-btn").addEventListener("click",function(){
    const listParent = document.getElementById("todo-list");

    while(listParent.firstChild){
        listParent.removeChild(listParent.firstChild);
    }
    localStorage.clear();
});

// ...

window.addEventListener("DOMContentLoaded", function () {
    const listParent = document.getElementById("todo-list");
  
    // Load items from local storage and recreate list items
    const storedTodoItems = JSON.parse(localStorage.getItem("todoItems")) || [];
    storedTodoItems.forEach(item => {
      const listItem = document.createElement("li");
      listItem.className = "list-group-item p-3";
      idCounter = Math.max(idCounter, item.id); // Update the idCounter
      idCounter++; // Increment the idCounter
  
      listItem.innerHTML = `
        <input class="form-check-input me-1" id="todo-${item.id}" type="checkbox" />
        <label class="form-check-label" for="todo-${item.id}">
          ${item.text}
        </label>
      `;
  
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
  
          // Update the storedTodoItems array and local storage
          const updatedTodoItems = storedTodoItems.filter(item => item.id !== idCounter);
          localStorage.setItem("todoItems", JSON.stringify(updatedTodoItems));
        }
      });
    });
  });
  
