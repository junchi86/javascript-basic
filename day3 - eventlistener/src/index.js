// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector("h2");

const superEventHandler = {
  mouseIn: () => {
    title.innerHTML = "The mouse is Here!!";
    title.style.color = colors[Math.floor(Math.random() * colors.length) + 1];
  },
  mouseOut: () => {
    title.innerHTML = "The mouse is Gone!!";
    title.style.color = colors[Math.floor(Math.random() * colors.length) + 1];
  },
  resize: () => {
    title.innerHTML = "You just Resized!!";
    title.style.color = colors[Math.floor(Math.random() * colors.length) + 1];
  },
  context: () => {
    title.innerHTML = "That was a Right Click!!";
    title.style.color = colors[Math.floor(Math.random() * colors.length) + 1];
  }
};

title.addEventListener("mouseenter", superEventHandler.mouseIn);
title.addEventListener("mouseleave", superEventHandler.mouseOut);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.context);
