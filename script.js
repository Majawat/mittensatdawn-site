document.addEventListener("DOMContentLoaded", () => {
  const snowContainer = document.getElementById("snow-layer");
  const numberOfFlakes = 48;

  const randomRange = (min, max) => min + Math.random() * (max - min);

  for (let i = 0; i < numberOfFlakes; i++) {
    const flake = document.createElement("span");
    flake.classList.add("snowflake");

    const sizeValue = randomRange(3, 9).toFixed(1);
    const driftValue = randomRange(-30, 45).toFixed(0) + "px";
    const duration = randomRange(8, 17).toFixed(1);
    const delay = (-randomRange(0, 17)).toFixed(1);

    flake.style.left = (Math.random() * 100).toFixed(2) + "%";
    flake.style.width = `${sizeValue}px`;
    flake.style.height = `${sizeValue}px`;
    flake.style.opacity = randomRange(0.35, 0.95).toFixed(2);
    flake.style.setProperty("--drift", driftValue);

    flake.style.animation = `snowfall ${duration}s linear ${delay}s infinite`;

    snowContainer.appendChild(flake);
  }
});
