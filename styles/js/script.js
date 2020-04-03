


function ageindays() {
    var birthYear = prompt('what year were you born.....Nice Man');
    var ageindayss = (2020 - birthYear) * 365 ;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are'+ ageindayss + 'days old.') ;
    h1.setAttribute('id','ageindays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset() {
    document.getElementById('ageindays').remove();
  }
  

// challenge 2
function generateCat() {
   var Catdiv = document.createElement('div');
   Catdiv.innerHTML ="<img class='cat-image' src='http://thecatapi.com/api/images/get?format=src&type=gif&size=small'>";
   document.getElementById('flex-cat-gen').appendChild(Catdiv);
}
