/*
# This project is based on a public project but has been modified 
# according to the requirements of the IST 107 Course.
# Instructor: Washington Valencia
# Institution: CCTB College
*/

document.addEventListener("DOMContentLoaded", () => {
  // Array of colors for background change
  const colors = [
    "#F0E68C",
    "#FFDAB9",
    "#FFE4B5",
    "#D8BFD8",
    "#B0E0E6",
    "#AFEEEE",
    "#E0FFFF",
    "#98FB98",
    "#FFDEAD",
    "#F5DEB3",
  ];

  let index = 0;

  // Function to change background color with a gradient effect
  const changeBackgroundColor = () => {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length; // Loop back to the start
  };

  // Change color every 2 seconds with a smooth transition
  setInterval(changeBackgroundColor, 2000);
});

let enterButton = document.getElementById("enter");
let input = document.getElementById("userInput");
let ul = document.querySelector("ul");
let item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function listLength() {
  return item.length;
}

// Function to implement the "Ask User" button functionality
function askUserForTasks() {
  let task = "";

  while (true) {
    task = prompt("Enter a task (or type 'exit' to stop):");
    if (task === null || task.toLowerCase() === "exit") break; // Exit if the user types 'exit'

    // Check for duplicate task
    let duplicate = false;
    let tasks = document.querySelectorAll("li");
    tasks.forEach(function (li) {
      if (li.textContent.replace("X", "").trim() === task) {
        duplicate = true;
      }
    });

    if (duplicate) {
      alert("Task already exists. Please enter a new task.");
    } else if (task.trim() !== "") {
      createTask(task); // Create the task
    }
  }
}

function createTask(task) {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(task));
  ul.appendChild(li);

  // Add delete button
  let dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);

  // Delete task functionality
  dBtn.addEventListener("click", function () {
    ul.removeChild(li);
  });

  // Cross-out functionality
  li.addEventListener("click", function () {
    li.classList.toggle("done");
  });
}

function addListAfterClick() {
  if (inputLength() > 0) {
    // Check for duplicate task
    let duplicate = false;
    let tasks = document.querySelectorAll("li");
    tasks.forEach(function (li) {
      if (li.textContent.replace("X", "").trim() === input.value) {
        duplicate = true;
      }
    });

    if (duplicate) {
      alert("Task already exists. Please enter a new task.");
    } else {
      createTask(input.value); // Create task with input value
      input.value = ""; // Reset the input field
    }
  }
}

// Bind the functions to respective buttons
let addTaskButton = document.getElementById("addTask");
let askUserButton = document.getElementById("askUser");

addTaskButton.addEventListener("click", addListAfterClick);
askUserButton.addEventListener("click", askUserForTasks);
