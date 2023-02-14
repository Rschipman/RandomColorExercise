const btn = document.querySelector("#btn");
const heading = document.querySelector("#heading");

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

btn.addEventListener("click", function () {
  const newColor = makeRandColor();
  document.body.style.backgroundColor = newColor;
  heading.innerText = newColor;
});
