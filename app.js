window.onload = function(){
ball = document.getElementById('ballId');
var stage = document.getElementById('stageId');
var basket = document.getElementById('basketId');
var scoreTab = document.getElementById('scoreId');

var speedBasket = 15;
var speedBall = 3;
var ballInterval;
var score = 0;


function moveBasket(event) {
    let basketLeft = basket.offsetLeft;
    if((event.key == 'a' || event.key == 'ArrowLeft') && basketLeft > 0){
        basket.style.left = basketLeft - speedBasket + 'px';
    }
    else {
        if((event.key == 'd' || event.key == 'ArrowRight') && basketLeft < (stage.clientWidth - basket.clientWidth)){
            basket.style.left = basketLeft + speedBasket + 'px';
        }
    }
}

document.addEventListener('keydown' , moveBasket);

function dropBall(){
    let ballTop = ball.offsetTop;
    let ballLeft = ball.offsetLeft;
    if(ballTop + ball.clientHeight >= stage.clientHeight){
        console.log(ballLeft, basket.offsetLeft);
        if(ballLeft > basket.offsetLeft && ballLeft < (basket.offsetLeft + basket.clientWidth)){
            score++;
            scoreTab.innerText = score;
            resetBall();
        }
        else {
            alert("Игра окончена \nВаш счёт: " + score);
            clearInterval(ballInterval);
        }
    }
    else {
        ball.style.top = ballTop + speedBall + 'px';
    }

}

function resetBall() {
    ball.style.top = 0 + 'px';
    ball.style.left = Math.floor(Math.random() * (stage.clientWidth - ball.clientWidth)) + 'px';
}

function startGame() {
    ballInterval = setInterval(dropBall , 20);
}

startGame();
}
