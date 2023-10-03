export const setCursor = loading => {
  const body = document.querySelector("body");
  loading ?
    body.classList.add("waiting") :
    body. classList.remove("waiting");
}