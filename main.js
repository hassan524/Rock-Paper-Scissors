const BASE_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
const dropdown_select = document.querySelectorAll(".drop-down select");
const fromcur = document.querySelector(".cur-from select")
const tocur = document.querySelector(".cur-to select")
const btn = document.querySelector(".cur-btn")
for (option of dropdown_select) {

  for (code in countryList) {
    const newoption = document.createElement("option");
    newoption.innerText = code;
    option.append(newoption)

    if (option.name === "from" && code === "USD"){
        newoption.selected = true
    }
    else if (option.name === "to" && code === "INR"){
        newoption.selected = true 
    }

  }

  option.addEventListener("change", (evt) => {
    ubdatelag(evt.target)
  })

}

const ubdatelag = (element) => {
   let code = element.value
   let countrycode = countryList[code]
   let flag = `https://flagsapi.com/${countrycode}/flat/64.png`
   let img = element.parentElement.querySelector("img")
   img.src = flag
}

btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  // let amount = document.querySelector("#Amount")
  // let realamount = amount

  const url = `${BASE_URL}/${fromcur.value.toLowerCase()}/${tocur.value.toLowerCase()}.json`
  const response = await fetch(url)
  console.log(response)
})