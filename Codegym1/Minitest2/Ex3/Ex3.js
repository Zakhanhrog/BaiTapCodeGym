function temp() {
    let temp = parseFloat(prompt("Hay nhap nhiet do"))
    if ( temp > 100 ){
        alert("Hay giam nhiet do")
    } else if ( temp < 20 ){
        alert("Hay tang nhiet do")
    } else {
        alert("nhiet do phu hop")
    }
}