function CheckSNT() {
    let number = parseFloat(prompt("Please enter a valid number"));
    let notify = true
    if (number <= 1) {
        notify = false
    } else if (number <= 3) {
        notify = true

    } else if (number % 2 == 0) {
        notify = false
    } else if (number % 3 == 0) {
        notify = false

    }else {
        let i = 5
        while ( i*i <= number) {
            if ( number % i == 0 || number % (i + 2) ==0 ) {
                i = i + 6
                notify = false
            }else {
                i+=6
            }
        }
        notify = true
    }
    if ( notify) {
        document.getElementById("result").innerHTML += number + " la so nguyen to" +"<br>"
    }else {
        document.getElementById("result").innerHTML += number + " khong la so nguyen to" + "<br>"
    }

}



