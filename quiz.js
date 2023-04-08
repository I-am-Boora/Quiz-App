const quizDb = [
  {
    Question: "Q1. What is RAM?",
    a: "a. Random Access Memory",
    b: "b. Random Acros Memory",
    c: "c. Random Access Managment",
    d: "d. Read Access Memory",
    ans: "ans1",
  },
  {
    Question: "Q2. What is ROM?",
    a: "a. Random Access Memory",
    b: "b. Read Only Memory",
    c: "c. Random Operation Managment",
    d: "d. Read official Memory",
    ans: "ans2",
  },
  {
    Question: "Q3. How can you catch a computer virus?",
    a: "a. Sending e-mail messages",
    b: "b. Using a laptop during the winter",
    c: "c. Opening e-mail attachments",
    d: "d. Shopping on-line",
    ans: "ans3",
  },
  {
    Question: "Q4. Google (www.google.com) is a:",
    a: "a. Search Engine",
    b: "b. Number in Math",
    c: "c. Directory of images",
    d: "d. Chat service on the web",
    ans: "ans1",
  },
  {
    Question: "Q.5 Which is not an Internet protocol?",
    a: "a. HTTP",
    b: "b. STP",
    c: "c. FTP",
    d: "d. IP",
    ans: "ans2",
  },
  {
    Question: "Q.6 AOL stands for:",
    a: "a. Arranged Outer Line",
    b: "b. America Over LAN",
    c: "c. Audio Over LAN",
    d: "d. merica On-line",
    ans: "ans2",
  },
  {
    Question: 'Q.7 "www" stands for:',
    a: "a. World Wide Web",
    b: "b. World Wide Wares",
    c: "c. World Wide Wait",
    d: "d. World Wide War",
    ans: "ans1",
  },
  {
    Question: "Q.8 '.JPG' extension refers usually to what kind of file?",
    a: "a. System file",
    b: "b. Animation/movie file",
    c: "c. MS Encarta document",
    d: "d. Image file",
    ans: "ans4",
  },
  {
    Question: "Q9. What was the first ARPANET message?",
    a: 'a. "lo"',
    b: 'b. "hello world"',
    c: 'c. "mary had a little lamb"',
    d: 'd. "cyberspace, the final frontier"',
    ans: "ans1",
  },
  {
    Question: "Q.10 'DTP' computer abbreviation usually means?",
    a: "a. Digital Transmission Protocol",
    b: "b. Desk-Top Publishing",
    c: "c. Data Type Programming",
    d: "d. Document Type Processing",
    ans: "ans2",
  },
];

const answers = document.querySelectorAll(".answer p");
const selectAns = document.querySelectorAll(".answer");
const submitBtn = document.querySelector(".btn");
const op1 = document.querySelector("#ans1");
const op2 = document.querySelector("#ans2");
const op3 = document.querySelector("#ans3");
const op4 = document.querySelector("#ans4");
const question = document.querySelector(".question h1");
const showHide = document.querySelector(".myClass");
const scoreDetail = document.querySelector(".score p");
const scoreBtn = document.querySelector(".score-btn");
const scoreBtnShowHide = document.querySelector(".scoreInfo");

var questionCount = 0;
var countScore = 0;
var selectedAnswer = "";

scoreBtnShowHide.classList.add("showQues");
const loadQues = () => {
  question.innerText = quizDb[questionCount].Question;
  op1.innerText = quizDb[questionCount].a;
  op2.innerText = quizDb[questionCount].b;
  op3.innerText = quizDb[questionCount].c;
  op4.innerText = quizDb[questionCount].d;
};
loadQues();

selectAns.forEach((ansEl) => {
  ansEl.addEventListener("click", (e) => {
    selectedAnswer = e.target.id;
    console.log(selectedAnswer);
  });
});
const getScore = () => {
  var getAns = quizDb[questionCount].ans;
  if (selectedAnswer == getAns) {
    scoreDetail.innerText = `${++countScore}/${quizDb.length}`;
    console.log(scoreDetail.innerText);
  }
};

submitBtn.addEventListener("click", () => {
  getScore();
  questionCount++;
  if (questionCount < quizDb.length) {
    loadQues();
  } else {
    showHide.classList.add("showQues");
    scoreBtnShowHide.classList.remove("showQues");
  }
});
scoreBtn.addEventListener("click", () => {
  questionCount = 0;
  countScore = 0;
  showHide.classList.remove("showQues");
  scoreBtnShowHide.classList.add("showQues");
  loadQues();
});
