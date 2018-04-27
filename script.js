var questions = [
  {
    question: "What is the yellow?",
    answers: [
      {text: "red"},
      {text: "yellow", isCorrect: true},
      {text: "blue"},
      {text: "silver"},
    ]
  },
  {
    question: "What is the red?",
    answers: [
      {text: "blue"},
      {text: "red", isCorrect: true},
      {text: "orange"},
      {text: "pink"},
    ]
  },
  {
    question: "What is the orange?",
    answers: [
      {text: "red"},
      {text: "orange", isCorrect: true},
      {text: "blue"},
      {text: "black"},
    ]
  },
  {
    question: "What is the blue?",
    answers: [
      {text: "blue", isCorrect: true},
      {text: "orange"},
      {text: "silver"},
      {text: "white"},
    ]
  },
    {
    question: "What is the white?",
    answers: [
      {text: "blue"},
      {text: "orange"},
      {text: "silver"},
      {text: "white", isCorrect: true},
    ]
  },
    {
    question: "What is the pink?",
    answers: [
      {text: "pink", isCorrect: true},
      {text: "orange"},
      {text: "silver"},
      {text: "white"},
    ]
  },
    {
    question: "What is the black?",
    answers: [
      {text: "blue"},
      {text: "black", isCorrect: true},
      {text: "silver"},
      {text: "green"},
    ]
  },
    {
    question: "What is the green?",
    answers: [
      {text: "green", isCorrect: true},
      {text: "orange"},
      {text: "silver"},
      {text: "black"},
    ]
  },
    {
    question: "What is the turquoise?",
    answers: [
      {text: "blue"},
      {text: "orange"},
      {text: "turquoise", isCorrect: true},
      {text: "white"},
    ]
  },
    {
    question: "What is the brown?",
    answers: [
      {text: "turquoise"},
      {text: "orange"},
      {text: "brown", isCorrect: true},
      {text: "white"},
    ]
  }
];
var score = 0;
var iQuestion = 0;

function updateQuestionAndScore() {
  if (iQuestion >= questions.length) { // prikaz rezultata kada iQuestion = 9
  	document.getElementsByClassName('htwo')[0].outerHTML = '<h2 onclick="myFunction()" style="border:1px solid blue; border-radius:5px; width:20%; margin:auto;cursor:pointer;">Start again</h2>';
    document.getElementsByClassName('question')[0].outerHTML = '';
    document.getElementsByClassName('answer')[3].outerHTML = '';
    document.getElementsByClassName('answer')[2].outerHTML = '';
    document.getElementsByClassName('answer')[1].outerHTML = '';
    document.getElementsByClassName('answer')[0].outerHTML = '';
    var scor = document.getElementsByClassName('scor');
    scor[0].style.background = "brown";
    scor[0].style.color = "white";
    scor[0].style.width = "150px";
    scor[0].style.height = "150px";
    scor[0].style.margin = "10px auto";
    scor[0].style.padding = "5px";
    scor[0].style.borderRadius = "50%";
    scor[0].style.lineHeight = "150px";
     
    return;
  }
  document.getElementsByClassName('score')[0].innerHTML = score; //prikaz poena 
  document.getElementsByClassName('question')[0].innerHTML = questions[iQuestion].question; //pitanja
  var answers = document.getElementsByClassName('answer');
  for (let i = 0; i < answers.length; i++) { // i < 4
  	answers[i].style.background = questions[iQuestion].answers[i].text;
  }
}

document.addEventListener("DOMContentLoaded", function(event) { 
  var answers = document.getElementsByClassName('answer');
  for (let i = 0; i < answers.length; i++) {
    answers[i].onclick = function() {
      if (questions[iQuestion].answers[i].isCorrect) {
        score++;
      }
      iQuestion++;
      updateQuestionAndScore();
    }
  }
  updateQuestionAndScore();
});

function myFunction() {
    location.reload();
}
