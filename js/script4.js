"use strict";
const model = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModel = document.querySelector(".close-modal");
const openModel = document.querySelectorAll(".show-modal");
const closeModelAll = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};
const openModelAll = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
for (let i = 0; i < openModel.length; i++)
  openModel[i].addEventListener("click", openModelAll);

closeModel.addEventListener("click", closeModelAll);
overlay.addEventListener("click", closeModelAll);
document.addEventListener("keydown", function (e) {
  console.log(e.key);
  if (e.key === "Escape" && !model.classList.contains("hidden")) {
    closeModelAll();
  }
});
