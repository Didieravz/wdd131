let chaptersArray = getChapterList() || [];

const input = document.querySelector("#favchap");
const addButton = document.querySelector("button");
const list = document.querySelector("#list");

function setChapterList() {
  localStorage.setItem("myFavBOMChapters", JSON.stringify(chaptersArray));
}

function getChapterList() {
  const storedChapters = localStorage.getItem("myFavBOMChapters");
  return storedChapters ? JSON.parse(storedChapters) : null;
}

function deleteChapter(chapter) {
  // 1. Reformat the chapter parameter to remove the ❌
  chapter = chapter.slice(0, chapter.length - 1);

  // 2. Redefine chaptersArray using array.filter
  chaptersArray = chaptersArray.filter((item) => item !== chapter);

  // 3. Update localStorage
  setChapterList();
}

function displayList(item) {
  const li = document.createElement("li");
  const deleteButton = document.createElement("button");
  const editarButton = document.createElement("button");
  editarButton.classList.add("editar");

  li.textContent = item;
  deleteButton.textContent = "❌";
  editarButton.textContent = "✎";
  li.append(editarButton);
  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener("click", function () {
    list.removeChild(li);
    deleteChapter(li.textContent);
    input.focus();
  });

  editarButton.addEventListener("click", function () {
    const oldText = item;
    const newText = prompt("Edit the chapter:", oldText);
    if (newText !== null && newText.trim() !== "") {
      li.firstChild.textContent = newText;
      const index = chaptersArray.indexOf(oldText);
      if (index > -1) {
        chaptersArray[index] = newText;
        setChapterList();
      }
    }
  });
}

chaptersArray.forEach((chapter) => displayList(chapter));

addButton.addEventListener("click", function () {
  if (input.value.trim() !== "") {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = "";
    input.focus();
  } else {
    alert("Please enter a chapter.");
  }
});
