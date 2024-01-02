const questions = [
    {
      question: "Qual Seleção ganhou a copa de 94?",
      choices: ["Ítalia", "Argentina", "Alemanha", "Brasil"],
      answer: "Brasil",
    },
    {
      question: "Em qual ano Ronaldo ganhou sua primeira copa?",
      choices: ["2002", "1998", "1994", "1990"],
      answer: "1994",
    },
    {
      question: "Quem foi o último brasileiro a ser eleito melhor do mundo",
      choices: ["Ronaldinho Gaúcho", "Romário", "Kaká", "Neymar"],
      answer: "Kaká",
    },
    {
      question: "quem foi o jogador marcou o gol do título da Seleção da Espanha na copa de 2010?",
      choices: ["Iniesta", "Sergio Ramos", "Villa", "Xavi"],
      answer: "Madri",
    },
    {
      question: "Qual ano a Ítalia ganhou sua primeira copa?",
      choices: ["1998", "1938", "1934", "1982"],
      answer: "1934",
    },
    {
      question: "Quem é o maior goleiro artilheiro de todos os tempos?",
      choices: ["Manuel Neuer", "Buffon", "Rogério Ceni", "Dida"],
      answer: "Ottawa",
    },
    {
      question: "Quem é o jogador com mais expulsões na história do futebol?",
      choices: ["Sergio Ramos", "Cyril Rool", "Gattusso", "Felipe Melo"],
      answer: "Cyril Rool",
    },
    {
      question: "O palmeiras tem Mundial?",
      choices: ["Sim", "sim, em 51", "KKKKKKK NÃO", "Ganhou 5 títulos mundiais"],
      answer: "KKKKKKK NÃO",
    },
  ];

  const questionElement = document.querySelector("#question")
  const choiceElements = document.querySelectorAll(".choice")
  const nextButton = document.querySelector("#next")
  const scoreElement = document.querySelector("#score")
  const wrongElement = document.querySelector("#wrong") 
  
  let currentQuestion = 0
  let score = 0
  let wrong = 0
  let answerChosen = false

  function loadQuestion() {
    const currentQuestionData = questions [currentQuestion]
    questionElement.innerText = currentQuestionData.question

    const choices = shuffleArray
    (currentQuestionData.choices)

    for (let i = 0; i < choiceElements.length; i++) {
      choiceElements[i].innerText = choices[i]
    }

    answerChosen = false
  }

  function shuffleArray(array) {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      temporaryValue = array[currentIndex]
      array[currentIndex] = array[randomIndex]
      array[randomIndex] = temporaryValue
    }

    return array
  }

  function checkAnswer(e) {
    if(answerChosen) return

    answerChosen = true

    if (e.target.innerText === questions [currentQuestion].answer) {
      score++
      scoreElement.innerText = `Pontuação: ${score}`
      alert("Correto!")
    } else {
      wrong++
      wrongElement.innerText = `Erros: ${wrong}`
      alert(`Errado! A resposta correta é: ${questions[currentQuestion].answer}`)
    }
  }

  choiceElements.forEach((btn) => {
    btn.addEventListener("click", checkAnswer)
  })

  nextButton.addEventListener("click", () => {
    if (!answerChosen) {
      alert("Por favor, responda a pergunta!")
      return
    }

    currentQuestion++

    if (currentQuestion < questions.length) {
      loadQuestion()
    } else {
      alert(
        `Fim de jogo! você acertou ${score} de ${questions.length} perguntas.`
      )
      restartQuiz()
    }
  })

  function restartQuiz() {
    currentQuestion = 0
    score = 0
    wrong = 0
    scoreElement.innerText = `Pontuação: 0`
    wrongElement.innerText = `Erros: 0`
    loadQuestion()
  }

  loadQuestion()