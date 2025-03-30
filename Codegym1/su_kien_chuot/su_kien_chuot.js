let imgBall = null

function init(){
    imgBall = document.getElementById('pictureball');
    imgBall.style.position = 'relative';
    imgBall.style.left = "0px"

}
function MoveLeft(){
    imgBall.style.left = parseInt(imgBall.style.left) + -10 +"px"
}
function MoveRight(){
    imgBall.style.left = parseInt(imgBall.style.left) + 10 +"px"
}
window.onload = init;