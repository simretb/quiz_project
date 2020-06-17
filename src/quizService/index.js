const qBank = [
  {
    question:
      "What was Ethiopia called before?   ",
    answers: ["East Africa", "Addis Ababa", "Abyssinia"],
    correct: "Abyssinia",
    questionId: "099099"
  },
  {
    question:
      "How old is Ethiopian History ?",
    answers: ["3000", "2000", "5000"],
    correct: "5000",
    questionId: "183452"
  },
  {
    question:
      "Who is the current prime minster of Ethiopia",
    answers: ["Hailemariam Desalegn", "Dr.Abiy Ahmed", "Dr.Tedross Adhanom"],
    correct: "Dr.Abiy Ahmed",
    questionId: "267908"
  },
  {
    question: "How many languages are spoken in ethiopia?",
    answers: ["86", "10", "55"],
    correct: "86",
    questionId: "333247"
  },
  {
    question: "What sport is Ethiopia famous for?",
    answers: ["soccer", "Basket Ball", "Long distance running", ],
    correct: "Long distance running",
    questionId: "496293"
  },

  {
    question:
      'What is the main languge spoken in Ethiopia',
    answers: ["Tigrigna", "Amharic", "Afan Oromo"],
    correct: "Amharic",
    questionId: "648452"
  },
  {
    question: "What part of Africa is Ethiopia located?",
    answers: ["East", "West", "North", "South"],
    correct: "East",
    questionId: "786649"
  },
  {
    question:
      "What year is it in Ethiopia?",
    answers: ["2020", "2014", "2019", "2012"],
    correct: "2012",
    questionId: "839754"
  },
  {
    question:  "How many months are there in Ethiopian calander",
    answers: [
      "13",
      "12",
      "14",
    ],

    correct: "13",
    questionId: "98390"
  },
  {
    question: "Who is the president of Ethiopia?",
    answers: ["Dr Sahle-Work Zewde  ", "Dr Abiy Ahmed", , "Teddy Afro"],
    correct: "Dr Sahle-Work Zewde",
    questionId: "1071006"
  },
  {
    question: "What is Ethiopia most Famous for?",
    answers: ["Coffe", "Rise", "oil"],
    correct: "Coffe",
    questionId: "1174155"
  },
  {
    question: "Ethiopia was under ________ colonie ?",
    answers: ["Brithish", "France", "Itali", "Ethiopia was never conolized before"],
    correct: "Ethiopia was never conolized before",
    questionId: "1174157"
  },
  {
    question: "Ethiopian new year begins on ?",
    answers: ["July 15th ", "January 1st", "September 11th"],
    correct: "September 11th",
    questionId: "1174156"
  },


];

export default (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));
