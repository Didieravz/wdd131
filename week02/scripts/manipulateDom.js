const input = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("#list");
const li = document.createElement("li");
const deleteButton = document.createElement("button");
const editarButton = document.createElement("button");
editarButton.classList.add("editar");

addButton.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    li.textContent = input.value;
    deleteButton.textContent = "❌";
    editarButton.textContent = "✎";
    li.append(editarButton);
    li.append(deleteButton);
    list.append(li);
    input.value = "";
  } else {
    alert("Please enter a chapter."); // Provide a message
  }
  input.focus();
});

deleteButton.addEventListener("click", function () {
  list.removeChild(li);
  input.focus();
});

editarButton.addEventListener("click", function () {
  const newText = prompt(
    "Edit the chapter:",
    li.textContent.replace("✎❌", "").trim()
  );
  if (newText !== null && newText.trim() !== "") {
    li.firstChild.textContent = newText;
  }
});
