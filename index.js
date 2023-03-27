// TOOGLE FUNCTIONALITY - BOOKMARK BUTTON

const bookmark = document.querySelector('[data-js="bookmark-1"]');
let toggle = true;
bookmark.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle) {
    bookmark.setAttribute("src", "./assets/bookmark_transparent.png");
  } else {
    bookmark.setAttribute("src", "./assets/bookmark_filled.png");
  }
});

// TOOGLE FUNCTIONALITY - ANSWER BUTTON
// if statement to check if "hidden" is there or not >> if so: Show Answer, if not: Hide Answer

const button = document.querySelector('[data-js="button"]');
const hiddenAnswer = document.querySelector('[data-js="hidden-answer"]');

button.addEventListener("click", () => {
  hiddenAnswer.toggleAttribute("hidden");
  button.textContent = "Hide answer";
  if (hiddenAnswer.hasAttribute("hidden")) {
    button.textContent = "Show answer";
  } else {
    button.textContent = "Hide answer";
  }
});
