
const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");





btnEl.addEventListener("click",()=>{
    const birthdayValue = birthdayEl.value
    // console.log(birthdayValue);
    if(birthdayValue === ""){
        alert("Please enter your birthday")
    }else{
        const age = getAge(birthdayValue)
        console.log(age)
        resultEl.innerText =`Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    }
})


function getAge(birthdayValue){
const currentDate = new Date()
const birthdayDate = new Date(birthdayValue);
// console.log(birthdayDate.getFullYear());
let age = currentDate.getFullYear() - birthdayDate.getFullYear();
const month = currentDate.getMonth() - birthdayDate.getMonth();
if(month < 0 || ( month===0 && currentDate.getDate() < birthdayDate.getDate())){
    // console.log(currentDate.getDate());
    // console.log(birthdayDate.getDate());
    age--;
}

return age;
// console.log(age)
}