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

function playerChoice(playerselection,computerselection)
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


console.log(playerChoice('PaPER',computerPlay()))