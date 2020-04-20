


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


// challenge 2 Cat generator
function generateCat() {
   var Catdiv = document.createElement('div');
   Catdiv.innerHTML ="<img class='cat-image' src='http://thecatapi.com/api/images/get?format=src&type=gif&size=small'>";
   document.getElementById('flex-cat-gen').appendChild(Catdiv);
}

function  rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanchoice,botchoice;
  humanchoice = yourChoice.id;
  botchoice=numbertochoice(randtorpsint());
  console.log(botchoice);
  results = decidewinner(humanchoice,botchoice )
  console.log(results); // [0,1] humanlos botwon
  message = finalmessage(results)// you won
  console.log(message)

  rpsfrontend(yourChoice.id,botchoice,message)
}

function randtorpsint() {
  return Math.floor(Math.random()*3);
}

function numbertochoice(number){
  return ['rock','paper','scissors'][number]
}

function  decidewinner(yourChoice,computerChoice){
  var rpsdatabase= {
    'rock':{'scissors':1, 'rock':0.5,'paper':0},
    'paper':{'rock':1,'paper':0.5,'scissors':0},
    'scissors':{'paper':1 ,'scissors':0.5,'rock':0}
  }
  var yourscore =rpsdatabase[yourChoice][computerChoice];
  var computerscore = rpsdatabase[computerChoice][yourChoice];

  return [yourscore,computerscore];

}

function finalmessage([yourscore, computerscore]){
  if (yourscore === 0) {
    return {'message': 'You lost!', 'color': 'red'}
  } else if (yourscore == 0.5) {
    return {'message': 'You tied!', 'color': 'yellow'}
  } else {
    return {'message': 'You won!', 'color': 'green'}
  }
}


function rpsfrontend(humanimagechoice, botimagechoice,finalmessage){
  var imagesdatabase = {
    'rock':document.getElementById('rock').src,
    'paper':document.getElementById('paper').src,
    'scissors':document.getElementById('scissors').src,
    
  }
  //lets remove all the images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humandiv = document.createElement('div');
  var botdiv =  document.createElement('div');
  var messagediv =  document.createElement('div');
  humandiv.innerHTML = "<img src='"+imagesdatabase[humanimagechoice]+"'height =150 width=150 style ='box-shadow:0px 10px 50px rgba(37,50,233,1);'>"
  messagediv.innerHTML = "<h1 style='color: " + finalmessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalmessage['message'] + "</h1>"
  botdiv.innerHTML = "<img src='"+imagesdatabase[botimagechoice]+"'height =150 width=150 style ='box-shadow:0px 10px 50px rgba(243,38,24,1);'>"


  document.getElementById('flex-box-rps-div').appendChild(humandiv);
  document.getElementById('flex-box-rps-div').appendChild(messagediv);
  
  document.getElementById('flex-box-rps-div').appendChild(botdiv);
  

}
// challenge 4 change the color of all buttons

var all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for (let i=0; i < all_buttons.length; i++) {
copyAllButtons.push(all_buttons[i],classList[1]);
}

function buttonColorChange(buttonThingy) {
  if (buttonThingy.value === 'red') {
    buttonsRed();
  } else if (buttonThingy.value === 'green') {
    buttonsGreen();
  } else if (buttonThingy.value === 'reset') {
    buttonColorReset();
  } else if (buttonThingy.value === 'random'){
    randomColors();
  }
}

function buttonsRed(){
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-danger');
  }
}

function buttonsGreen(){
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add('btn-success');
  }
}

function buttonColorReset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColors() {
  var allButtons = document.getElementsByTagName('button');

  var choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

  for (i = 0; i < allButtons.length; i++) {
    var randomNumber = Math.floor(Math.random() * 4);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[randomNumber]);
  }
}
