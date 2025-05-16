
function pedra () {
    const randomNumber = Math.random()
    let computerMove = ''

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'pedra'
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'papel'
        } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
            computerMove = 'tesoura'
        }

        console.log(computerMove)
        let result = ''
        
        if (computerMove === 'pedra') {
            result = 'Empate!'
        } else if (computerMove === 'papel') {
            result = 'Você perdeu!'
        } else if (computerMove === 'tesoura') {
            result = 'Você ganhou!'
        }
        
        alert(`Você jogou pedra. O computador jogou ${computerMove}. ${result}`)
}

function papel () {
randomNumber = Math.random()
     computerMove = ''
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'pedra'
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) 
            {computerMove = 'papel'
        } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
            computerMove = 'tesoura'
        }

        console.log(computerMove)
        result = ''
        
        if (computerMove === 'pedra') {
            result = 'Você ganhou!'
        } else if (computerMove === 'papel') {
            result = 'Empate!'
        } else if (computerMove === 'tesoura') {
            result = 'Você perdeu!'
        }
        
        alert(`Você jogou papel. O computador jogou ${computerMove}. ${result}`)
}

function tesoura () {
randomNumber = Math.random()
     computerMove = ''
        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'pedra'
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerMove = 'papel'
        } else if (randomNumber >= 2 / 3 && randomNumber < 3 / 3) {
            computerMove = 'tesoura'
        }

        console.log(computerMove)
        result = ''
        
        if (computerMove === 'pedra') {
            result = 'Você perdeu!'
        } else if (computerMove === 'papel') {
            result = 'Você ganhou!'
        } else if (computerMove === 'tesoura') {
            result = 'Empate!'
        }
        
        alert(`Você jogou tesoura. O computador jogou ${computerMove}. ${result}`)
}