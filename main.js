
fetch('https://api.exchangeratesapi.io/latest')
  .then(response => response.json())
  .then(data => {
      console.log(data)
    const info = data.rates
    console.log(info[])
  })



window.onload = function() {
    let currencyOne = document.querySelector(".convert-from")
    let currencyTwo = document.querySelector(".convert-to")

    for(let i = 0; i < currencies.length; i++) {
        let opt = currencies[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        currencyOne.appendChild(el);
        
    }

    for(let i = 0; i < currencies.length; i++) {
        let opt = currencies[i];
        let el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        currencyTwo.appendChild(el);
        
    }
    currencyOne.onchange = function() {
        
    }

}