let Nobita = null
function init(){
    Nobita = document.getElementById('Imgnobita')
    Nobita.style.position = 'relative';
    Nobita.style.left = '0px'
    Nobita.style.top = '0px'
}
function UpPressed(){
    let Nobita = document.getElementById('Imgnobita');
    Nobita.style.top = parseFloat(Nobita.style.top) - 10 + "px";
}
function DownPressed(){
    let Nobita = document.getElementById('Imgnobita');
    Nobita.style.top = parseFloat(Nobita.style.top) + 10 + "px";
}
function LeftPressed(){
    let Nobita = document.getElementById('Imgnobita');
    Nobita.style.left = parseFloat(Nobita.style.left) - 10 + "px";
}
function RightPressed(){
    let Nobita = document.getElementById('Imgnobita');
    Nobita.style.left = parseFloat(Nobita.style.left) + 10 + "px";
}
function SelectPressed(evt){
    switch (evt.keyCode){
        case 37:
            LeftPressed();
            break;
            case 39:
                RightPressed();
                break;
                case 38:
                    UpPressed();
                    break;
                    case 40:
                        DownPressed();
                        break;
    }
}
function Doing(){
    window.addEventListener('keydown', SelectPressed);
}
window.onload = init;
Doing();