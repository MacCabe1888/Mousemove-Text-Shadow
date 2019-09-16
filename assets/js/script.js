const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const distance = 100;

function shadow(e) {
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  if (this !== e.target) {
    x += e.target.offsetLeft;
    y += e.target.offsetTop;
  }

  const xShadow = Math.round(x / width * distance) - (distance / 2);
  const yShadow = Math.round(y / height * distance) - (distance / 2);

  text.style.textShadow = `
    ${xShadow}px ${yShadow}px 2px rgba(255, 0, 255, 0.7),
    ${-xShadow}px ${yShadow}px 2px rgba(0, 255, 255, 0.7),
    ${yShadow}px ${-xShadow}px 2px rgba(0, 255, 0, 0.7),
    ${-yShadow}px ${xShadow}px 2px rgba(0, 0, 255, 0.7)
  `;
}

hero.addEventListener("mousemove", shadow);
