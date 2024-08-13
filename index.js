class Clicker {
  constructor(size, maxWeight, delay, victoryScore) {
    this.size = size
    this.maxWeight = maxWeight
    this.delay = delay
    this.victoryScore = victoryScore
    this.score = 0
    this.gameContainer = document.createElement('div')
    this.gameContainer.classList.add('game')
    this.gameContainer.style.width = `${size}px`
    this.gameContainer.style.height = `${size}px`
    this.gameContinue = false
    this.totalTime = 0
    this.intervalId = null
  }

  renderTo(element) {
    element.appendChild(this.gameContainer)
    this.startGame()
  }

  startGame() {
    const unpauseButton = document.getElementById('unpause')
    unpauseButton.disabled = true
    this.intervalId = setInterval(() => {
      this.clearBalls()
      this.spawnBall()
      this.totalTime++
    }, this.delay)
  }

  reset() {
    clearInterval(this.intervalId)
    const pauseButton = document.getElementById('pause')
    const unpauseButton = document.getElementById('unpause')
    pauseButton.disabled = false
    unpauseButton.disabled = true
    this.totalTime = 0
    this.score = 0
    this.gameContinue = false
    this.clearFinalMessage()
    this.clearBalls()
    this.startGame()
  }

  pause() {
    const pauseButton = document.getElementById('pause')
    const unpauseButton = document.getElementById('unpause')
    pauseButton.disabled = true
    this.clearBalls()
    unpauseButton.disabled = false
    clearInterval(this.intervalId)
  }

  unpause() {
    const pauseButton = document.getElementById('pause')
    pauseButton.disabled = false
    this.startGame()
  }

  clearBalls() {
    const balls = this.gameContainer.querySelectorAll('.cell')
    balls.forEach((ball) => ball.remove())
  }

  spawnBall() {
    const color = this.getRandomColor()
    const size = this.getSize()
    const xPos = Math.floor(Math.random() * (this.size - size))
    const yPos = Math.floor(Math.random() * (this.size - size))

    const ball = document.createElement('div')
    ball.classList.add('cell')
    ball.style.backgroundColor = color
    ball.style.width = `${size}px`
    ball.style.height = `${size}px`
    ball.style.lineHeight = `${size}px`
    ball.style.left = `${xPos}px`
    ball.style.top = `${yPos}px`

    ball.addEventListener('click', () => {
      this.score += this.getScore(size)
      ball.remove()
      document.getElementById('score-value').textContent = this.score

      if (this.score >= this.victoryScore) {
        clearInterval(this.intervalId)
        this.showFinalMessage()
      }
    })

    this.gameContainer.appendChild(ball)
  }

  getRandomColor() {
    const letters = ['#7339AB', '#625AD8', '#1F9CE4', '#88F4FF']
    return letters[Math.floor(Math.random() * 4)]
  }

  getSize() {
    return (Math.floor(Math.random() * this.maxWeight) + 1) * 30
  }

  getScore(size) {
    return this.maxWeight - size / 30 + 1
  }

  showFinalMessage() {
    const message = document.createElement('p')
    message.setAttribute('id', 'scoreMessage')
    message.textContent = `Congrats! You won in ${this.totalTime} seconds.`
    this.gameContainer.appendChild(message)
  }

  clearFinalMessage() {
    const message = document.getElementById('scoreMessage')
    if (message) {
      message.remove()
    }
    const elem = document.getElementById('score-value')
    elem.textContent = '0'
  }
}

const clicker = new Clicker(400, 5, 1000, 30)
clicker.renderTo(document.body)

const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', clicker.reset.bind(clicker))
const pauseButton = document.getElementById('pause')
pauseButton.addEventListener('click', clicker.pause.bind(clicker))
const unpauseButton = document.getElementById('unpause')
unpauseButton.addEventListener('click', clicker.unpause.bind(clicker))
