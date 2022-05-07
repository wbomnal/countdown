// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let count = 0
let countEl = document.getElementById("count-el")
let infoEl = document.getElementById("info")
function increment()
{
    count = count + 1
countEl.innerText = count
};

function decrement()
{
    count = count - 1
countEl.innerText = count
};

function save()
{
  let countStr = count + " - "

  infoEl.innerText += countStr
  countEl.innerText = 0
      count = 0
};