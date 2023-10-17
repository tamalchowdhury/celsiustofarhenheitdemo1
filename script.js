function celsiusToFarhenheit(celsius) {
  const farhenheit = (celsius * 9/5) + 32
  return farhenheit
}

function displayFarhenheit(f) {
  const farSpan = document.querySelector("#far")
  farSpan.textContent = f
}

const form = document.querySelector("#form")

function handleSubmit(event) {
  event.preventDefault()
  const celsius = event.target.celsius.value

  if(celsius) {
    const farhenheit = celsiusToFarhenheit(celsius)
    displayFarhenheit(farhenheit)
  }

}

form.addEventListener("submit", handleSubmit)