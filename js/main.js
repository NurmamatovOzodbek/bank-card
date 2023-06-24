// let btn = document.querySelector("button")
let form = document.querySelector("form")
let finish = document.querySelector(".finish")
let submitBtn = document.querySelector(".confirm")
let cardNameInp = document.querySelector("#user")
let cardNumInp = document.querySelector("#number")
let cardMonthInp = document.querySelector("#month")
let cardYearInp = document.querySelector("#years")
let cardCvcInp = document.querySelector("#cvc")
let inputs = document.querySelectorAll("input")
let closeBtn = document.querySelector("[close-btn]")
let cardName = document.querySelector("#numberInner")
let cardNumber = document.querySelector('#nameInner')
let mmyy = document.querySelector('#myInner')
let cvcIn = document.querySelector("#cvcInner")
let afters = document.querySelectorAll("form div p")
let arr
let a
function every(inputs) {
   for (let i = 0; i < inputs.length; i++) {
      if (String(inputs[i].value).length === 0) {
         return false
      }
   }
   return true
}
function createUser(cardName, cardNumber, mm, yy, cvc) {
   return {
      cardName,cardNumber,
      mm,
      yy,
      cvc
   }
}

let info = []

cardNumInp.addEventListener('input', () => {
   arr = cardNumInp.value.split(" ").join("")
   if (arr.length % 4 === 0 && arr.length !== 16) {
      cardNumInp.value += " "
   }
   cardNumber.innerHTML = cardNumInp.value
})

cardNameInp.addEventListener('input', () => {
   cardName.innerHTML = cardNameInp.value
})

mmyy.addEventListener('input', () => {
   console.log(mmyy);
})

submitBtn.addEventListener('click', () => {
   if (every(inputs) && !isNaN(arr / 1)) {
      info.push(createUser(cardNameInp.value, Number(arr), cardMonthInp.value, cardYearInp.value, cardCvcInp.value))
      for (let i = 0; i < inputs.length; i++) {
         inputs[i].classList.remove('red-border')

         inputs[i].value = ""
      }

      for (let i = 0; i < afters.length; i++) {
         afters[i].style.display = 'none'
      }
      form.style.display = 'none'
      finish.style.display = 'flex'
      console.log(info);
   } else if (!every(inputs) || isNaN(arr / 1)) {
      if (!every(inputs)) {
         for (let i = 0; i < inputs.length; i++) {
            if (String(inputs[i].value).length === 0) {
               inputs[i].classList.add("red-border")
               for (let i = 0; i < afters.length; i++) {
                  afters[i].style.display = 'inline'
               }
            }
         }
      }
      if (isNaN(arr / 1)) {
         cardNumInp.classList.add("red-border")
         cardNumInp.style.display = 'inline'
      }

   }
})


closeBtn.addEventListener("click", () => {
   window.location.reload()
})


console.log(users);

console.log(cardNumInp.value);

console.log(inputs);