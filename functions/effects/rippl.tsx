export function createRipple(event: any) {
  const card = event.currentTarget;

  const circle = document.createElement("span");
  const diameter = Math.max(card.clientWidth, card.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - card.offsetLeft - radius}px`;
  circle.style.top = `${event.clientY - card.offsetTop - radius}px`;
  circle.classList.add("ripple");

  const ripple = card.getElementsByClassName("ripple")[0];

  if (ripple) {
    ripple.remove();
  }

  card.appendChild(circle);
}
