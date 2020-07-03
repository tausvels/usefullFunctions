let clock = setInterval(getTiming, 1000);
function getTiming() {
  const d = new Date();
  return (document.querySelector(
    ".show-clock"
  ).innerHTML = d.toLocaleTimeString());
}
const btn = document.querySelector("#show-time-btn");
btn.addEventListener("click", () => {
  let displayContainer = document.querySelector(".show-clock");
  if (displayContainer.style.display === "none") {
    displayContainer.style.display = "block";
    btn.value = "HIDE TIME";
  } else {
    displayContainer.style.display = "none";
    btn.value = "SHOW TIME";
  }
});
