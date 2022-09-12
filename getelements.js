/* Write your code below each comment */

/* Get the element with an ID of 'first' */
const first = document.getElementById('first')
console.log(first)
/* Now delete that first element (in the html file), and re-run your code. What changed? */
// first.style.display ='none'

/* Get the elements with a class of 'second' with getElementsByClassName: */
const second = document.getElementsByClassName('second')
console.log(second)
/* Delete one of the elements with a class of 'second' and refresh the page. Do you get a similar result? */
 second[1].style.display = 'none'

/* Get the span element using getElementsByTagname: */

/* Add a span anywhere, and re-run the last piece of code. What's different? */
const el = document.getElementsByClassName('elements')
console.log(el)
const newSpan = document.createElement('span')
newSpan.textContent = "'This is my new span'"
el[0].appendChild(newSpan)
const span = document.getElementsByTagName('span')
console.log(span)