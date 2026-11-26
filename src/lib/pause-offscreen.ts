// Pauses motion graphics while they are off screen, so each one starts from
// its first frame the first time it scrolls into view
const observer = new IntersectionObserver((entries) => {
  for (const { target, isIntersecting } of entries) {
    target.toggleAttribute("data-paused", !isIntersecting)
  }
})

for (const element of document.querySelectorAll("[data-motion-graphic]")) {
  element.setAttribute("data-paused", "")
  observer.observe(element)
}
