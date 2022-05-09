// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0
// let counts = [count]
let sumT = count

let countEl = document.getElementById("count-el")
let infoEl = document.getElementById("info")
let sumEl = document.getElementById("sum-el")

function increment()
{
    count = count + 1
countEl.textContent =  count 
};

function decrement()
{
    count = count - 1
countEl.textContent = count
};

function sumTotal(){
  sumT += count
 sumEl.textContent = "Sum: " + sumT
  
}

function save()
{
  let countStr = count + " - "
        countEl.textContent += count + " "
    
  sumTotal()
  infoEl.textContent += countStr
  countEl.textContent = 0
  count = 0
};

// function sumTotal(){
//   sumEl.textContent += countEl.textContext
// }