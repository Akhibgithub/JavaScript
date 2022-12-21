const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const colseBtn = document.querySelector(".close-btn");
modalBtn.addEventListener("click", () => {
  modal.classList.add("open-modal");
});
colseBtn.addEventListener("click", () => {
  modal.classList.remove("open-modal");
});
//cgjhfhjhjhjvhvvjhhjvhjvhjvhjnb