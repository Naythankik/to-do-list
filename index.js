let mode = document.querySelector("#mode");
let container = document.querySelector(".container");
let todoListContainer = document.querySelector(".todo-list");
let todoInput = document.querySelector("#todo");
let currentMode = mode.firstElementChild;
let outerMenu = document.querySelector(".outer");

let todoList = document.querySelectorAll(".todo-records");
mode.addEventListener("click", function () {
  let night = "./images/icon-moon.svg";
  let day = "./images/icon-sun.svg";
  if (currentMode.getAttribute("src") == night) {
    container.style.backgroundImage = "url('./images/bg-desktop-dark.jpg')";
    container.style.backgroundColor = "hsl(235, 21%, 11%)";
    todoListContainer.style.background = "hsl(235, 24%, 19%)";
    outerMenu.style.backgroundColor = "hsl(235,21%,19%)";
    todoInput.style.background = "hsl(235, 24%, 19%)";
    todoInput.style.color = "hsl(234, 39%, 85%)";
    for (let i = 0; i < todoList.length; i++) {
      todoList[i].style.color = "hsl(234, 39%, 85%)";
    }
    currentMode.setAttribute("src", day);
  } else {
    container.style.backgroundImage = "url('./images/bg-desktop-light.jpg')";
    container.style.backgroundColor = "hsl(236, 33%, 92%)";
    todoListContainer.style.background = "hsl(0, 0%, 98%)";
    outerMenu.style.backgroundColor = "hsl(0,0%,98%)";
    todoInput.style.background = "hsl(0, 0%, 98%)";
    todoInput.style.color = "hsl(235    , 19%, 35%)";
    for (let i = 0; i < todoList.length; i++) {
      todoList[i].style.color = "hsl(235, 19%, 35%)";
    }
    currentMode.setAttribute("src", night);
  }
});

let markAsRead = (element) => {
  element.classList.toggle("no-underline");
  if (currentMode.getAttribute("src") == "./images/icon-moon.svg") {
    element.style.color = "hsl(233, 11%, 84%)";
  } else {
    element.style.color = "hsl(233, 14%, 35%)";
  }
};

let menus = document.querySelector(".in-menu").children;

for (let i = 0; i < menus.length; i++) {
  menus[i].addEventListener("mouseover", function () {
    if (currentMode.getAttribute("src") == "./images/icon-moon.svg") {
      menus[i].style.color = "black";
    } else {
      menus[i].style.color = "white";
    }
  });
  menus[i].addEventListener("mouseout", function () {
    menus[i].style.color = "hsl(235, 19%, 35%)";
  });
}

let nB = document.querySelector(".bottom-menu").lastElementChild;
nB.addEventListener("mouseover", function () {
  if (currentMode.getAttribute("src") == "./images/icon-moon.svg") {
    nB.style.color = "black";
  } else {
    nB.style.color = "white";
  }
});
nB.addEventListener("mouseout", function () {
  nB.style.color = "hsl(236, 9%, 61%)";
});
