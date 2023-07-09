
const btnEl = document.getElementById("calculate");
const billInputEl= document.getElementById("bill");
const TipInputEl= document.getElementById("tip");
const totalSpan= document.getElementById("total");

function calculateTotal(){
    const billValue = billInputEl.value;
    const tipValue = TipInputEl.value;
    const totalValue = billValue * (1 + tipValue / 100)
    totalSpan.innerText = totalValue.toFixed(2)
    console.log(billValue);

}

btnEl.addEventListener("click", calculateTotal);