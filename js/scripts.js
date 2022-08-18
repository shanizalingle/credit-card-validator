// Business Logic
function creditCard(number) {
  if (number.toString().length === 16) {
    const numArray = number.toString().split("");
      return numArray;
    } else {
    return false;
  }
}


















// UI Logic

// window.onload = function() {
//   document.querySelector("form").onsubmit = function(event){
//   event.preventDefault();
//   }
// }