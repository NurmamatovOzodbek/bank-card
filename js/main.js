let form = document.querySelector("form")
let submitBtn = document.querySelector(".confirm")
let cardholderInp = document.querySelector("#user")
let cardNumInp = document.querySelector("#number")
let mm = document.querySelector('#month')
let yy = document.querySelector('#years')
let cvc = document.querySelector('#cvc')
let inputs = document.querySelectorAll("input")
let closeBtn = document.querySelector("[close-btn]")
let cardholderName = document.querySelector('#cardNameInnerText')
let cardNumber = document.querySelector('#cardNumberInnerText')
let mmyy = document.querySelector('#mmyy')
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
function createUser(cardholderName, cardNumber, MM, YY, cvc) {
   return {
      cardholderName,
      cardNumber,
      MM,
      YY,
      cvc
   }
}

let users = []

cardNumInp.addEventListener("input", () => {
   arr = cardNumInp.value.split(" ").join("")
   if (arr.length % 4 === 0 && arr.length !== 16) {
      cardNumInp.value += " "
   }
   cardNumber.innerHTML = cardNumInp.value
})

cardholderInp.addEventListener('input', () => {
   cardholderName.innerHTML = cardholderInp.value
})

mmyy.addEventListener('input', () => {
   console.log(mmyy);
})

submitBtn.addEventListener("click", () => {
   if (every(inputs) && !isNaN(arr / 1)) {
      users.push(createUser(cardholderInp.value, Number(arr), mm.value, yy.value, cvc.value))
      for (let i = 0; i < inputs.length; i++) {
         inputs[i].classList.remove('red-border')

         inputs[i].value = ""
      }

      for (let i = 0; i < afters.length; i++) {
         afters[i].style.display = 'none'
      }
      form.style.display = 'none'
      finish.style.display = 'flex'
      console.log(users);
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