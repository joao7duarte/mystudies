
function rock () {
    const randomNumber = Math.random()
    let computerMove = ''

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock'
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'paper'
        } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
            computerMove = 'scissors'
        }

        console.log(computerMove)
        let result = ''
        
        if (computerMove === 'rock') {
            result = 'Tie!'
        } else if (computerMove === 'paper') {
            result = 'You lose!'
        } else if (computerMove === 'scissors') {
            result = 'You win!'
        }
        
        alert(`You played rock. Computer played ${computerMove}. ${result}`)
}

function paper () {
randomNumber = Math.random()
     computerMove = ''
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock'
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) 
            {computerMove = 'paper'
        } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
            computerMove = 'scissors'
        }

        console.log(computerMove)
        result = ''
        
        if (computerMove === 'rock') {
            result = 'You win!'
        } else if (computerMove === 'paper') {
            result = 'Tie!'
        } else if (computerMove === 'scissors') {
            result = 'You lose!'
        }
        
        alert(`You played paper. Computer played ${computerMove}. ${result}`)
}

function scissors () {
randomNumber = Math.random()
     computerMove = ''
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock'
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'paper'
        } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
            computerMove = 'scissors'
        }

        console.log(computerMove)
        result = ''
        
        if (computerMove === 'rock') {
            result = 'You lose!'
        } else if (computerMove === 'paper') {
            result = 'You win!'
        } else if (computerMove === 'scissors') {
            result = 'Tie!'
        }
        
        alert(`You played scissors. Computer played ${computerMove}. ${result}`)
}
