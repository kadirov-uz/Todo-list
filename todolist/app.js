const input = document.getElementById("input");
const addBtn = document.querySelector(".addBtn");
const newTodoAll = document.querySelector(".newTodoAll");
const todoMain = document.querySelector(".todoMain");
const deleteAll = document.querySelector(".deleteAll");

addBtn.addEventListener("click", createItem);
function createItem(){
     const newItem = document.createElement("div");
     newItem.classList = "newItem";
     const newTitle =  document.createElement("h1");
     newTitle.classList = "newItem__title";
     newTitle.innerHTML = input.value;
     const newSpan = document.createElement("span");
     newSpan.classList = "deleteItem";
     const deleteIcon = document.createElement("i");
     deleteIcon.classList ="fa-solid fa-trash";

     newTodoAll.appendChild(newItem);
     newItem.appendChild(newTitle);
     newItem.appendChild(newSpan);
     newSpan.appendChild(deleteIcon);
     todoMain.reset();
     newSpan.addEventListener("click", deleteItem )
     function deleteItem(){
        newItem.remove();
     }
}
deleteAll.addEventListener("click", deleteAllItem)

function deleteAllItem(){
    newTodoAll.remove();
//   newTodoAll.style.display ="none";
}