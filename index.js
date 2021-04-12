var readlineSync = require('readline-sync');

var userName = readlineSync.question('Hey, What is your name? ');

console.log('Welcome ' + userName + '. Let"s have some fun!');

var score = 0;

function play(question, answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer === answer){
    score++;
    console.log('You are right');
  }else{
    score--;
    console.log('You are wrong');
  }
  console.log('You have scored:' + score + ' points');
}

var questions = [
{
  question: 'Which month I was born?',
  answer: 'May'
},

{
  question: 'Which is my favorite game?',
  answer: 'valorant'
},

{
  question: 'Do I have a pet?',
  answer: 'no'
},
];

for(var i = 0; i < questions.length; i++){
  var currQuestion = questions[i];
  play(currQuestion.question, currQuestion.answer);
}

console.log('Your total score is:', score);
