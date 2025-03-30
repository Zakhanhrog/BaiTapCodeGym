function checkday(){
    let months = parseFloat(document.getElementById("months").value);
    switch(months){
        case 3:
        case 8:
        case 10:
        case 5:
        case 7:
        case 12:
        case 1:
            document.getElementById("result").innerHTML = "Days: 31";
            break;
        case 2:
            document.getElementById("result").innerHTML = "Days: 29 or 28";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("result").innerHTML = "Days: 30";
            break;
            default:
                document.getElementById("result").innerHTML = "Days: ?";
                break;
    }
}