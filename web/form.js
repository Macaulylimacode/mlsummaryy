import { server } from "./server.js"
const form = document.querySelector("#form"),
  input = document.querySelector("#url"),
  content = document.querySelector("#content")
form.addEventListener("submit", async (a) => {
  a.preventDefault(), content.classList.add("placeholder")
  const b = input.value
  if (!b.includes("shorts"))
    return (content.textContent = "Esse v\xEDdeo n\xE3o parece ser um short.")
  const [c, d] = b.split("/shorts/"),
    [e] = d.split("?si")
  content.textContent = "Obtendo o texto do \xE1udio..."
  const f = await server.get("/summary/" + e)
  content.textContent = "Realizando o resumo..."
  const g = await server.post("/summary", { text: f.data.result })
  ;(content.textContent = g.data.result),
    content.classList.remove("placeholder")
})
