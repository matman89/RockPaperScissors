function computerPlay()
{
    let RPC = Math.floor(Math.random() * 3);
    if (RPC===0)
    {
        return 'rock'
    }
    else if (RPC===1)
    {
        return 'paper'
    }
    else if (RPC===2)
    {
        return 'scissors'
    }
}

function round(playerselection,computerselection)
{
    let choice = playerselection.toLowerCase();
    switch(true)
    {
        case choice === computerselection:
            return 'Tie Game!';
            break;
        case choice === 'rock' && computerselection === 'paper':
            return 'You Lose! Paper beats rock';
            break;
        case choice === 'rock' && computerselection === 'scissors':
            return 'You Win! Rock beats scissors';
            break;
        case choice === 'paper' && computerselection === 'rock':
            return 'You Win! Paper beats rock';
            break;
        case choice === 'paper' && computerselection === 'scissors':
            return 'You Lose! Scissors beats paper';
            break;
        case choice === 'scissors' && computerselection === 'paper':
            return 'You Win! Scissors beats paper';
            break;
        case choice === 'scissors' && computerselection === 'rock':
            return 'You Lose! Rock beats scissors';
            break;      
    }
}

function game()
{
    let player_score = 0;
    let comp_score = 0;
    while (Math.max(player_score,comp_score) < 5)
    {
        let playerThrow = prompt("Rock, Paper or Scissors?");
        let result = round(playerThrow,computerPlay());
        console.log(result);
        term_result = result.toLowerCase()
        if (term_result.includes("win"))
        {
            player_score += 1;
        }
        if (term_result.includes("lose"))
        {
            comp_score += 1;
        }
    }

    if (player_score == 5) 
    { 
        alert("Winner, Winner, Chicken Dinner!")
    }

    if (comp_score == 5) 
    { 
        alert("Loser, Loser, Chicken Bruiser!")
    }
}

const button_rock =  document.querySelector('#Rock');
const button_paper = document.querySelector('#Paper');
const button_scissors = document.querySelector('#Scissors');



button_rock.addEventListener('click', function(){
    alert(round('rock',computerPlay()))
})
