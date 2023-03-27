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

// if statement to check if "hidden" is there or not >> if so: Show Answer, if not: Hide Answer

// const bookmark = document.querySelector('[data-js="bookmark-1"]');

// bookmark.addEventListener("click", () => {
//   swapBookmarks();
//   changeScr();
//   changeBack();
// });

// function swapBookmarks() {
//   let img1 = document.getElementById("bookmark-1");
//   let img2 =
//   let fetch = img1.src;
//   img1.src = img2.src;
//   img2.src = fetch;
// }

// function changeScr() {
//   document.getElementById("bookmark-1").src = "./assets/bookmark_filled.png";
// }

// const expr = "./assets/bookmark_transparent.png";

// switch (expr) {
//   case "./assets/bookmark_transparent.png":
//     break;
//   case "./assets/bookmark_filled.png":
//     break;
// }

// function changeBack() {
//   let image = bookmark.getAttribute("src");
//  let toggle = true;
//   if (image.src === "./assets/bookmark_transparent.png") {
//     image.src = "./assets/bookmark_filled.png";
//   } else if (image.src === "./assets/bookmark_filled.png") {
//     image.src = "./assets/bookmark_transparent.png";
//   }
// }
