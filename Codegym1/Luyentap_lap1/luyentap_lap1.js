// ex1
function count100() {
    for (let i = 0; i <= 100; i++) {
        if (i === 99){
            alert(" Da hoan thanh ")
            document.write(i + " ")
        }else {
        document.write(i + " ")
        }
    }
}

// ex2
function temp() {
    let temp = parseFloat(prompt("Hay nhap nhiet do"))
    if (isNaN(temp)) {
        if (temp > 100) {
            alert("Hay giam nhiet do")
        } else if (temp < 20) {
            alert("Hay tang nhiet do")
        } else {
            alert("nhiet do phu hop")
        }
    }else{
        alert("Hay nhap nhiet do")
    }
}

// ex3
function fibonacci() {
    let x1 = 0
    let x2 = 1
    let i = 0
    let x3

    while (i < 10) {
        document.write(x1 + "<br>")
        x3 = x1 + x2;
        x1 = x2
        x2 = x3
        i++
    }
}

// ex4
function fibonacci5() {
    let x1 = 0
    let x2 = 1
    let i = 0
    let x3
    while (i >= 0) {
        document.write(x1 + "<br>")
        if ( x1 % 5 === 0 && x1 > 0) {
            document.write("So fibonacci dau tien chia het cho 5 la: " + x1 )
            break;
        }
            x3 = x1 + x2;
            x1 = x2
            x2 = x3
            i++

    }
}

// ex5
function sum307(){
    let count = 0
    let sum307 = 0
    let x=0
    while ( count < 30 ) {
        if ( x % 7 === 0 ){
            sum307 = sum307 + x
            x++
            count++
        }else{
            x++
        }
    } console.log(sum307)
}

// ex6
function fizzbuzz(){
    let number =0
    let count = 0

    while (count < 100) {
        if ( number % 3 === 0 ) {
            if (number % 5 === 0) {
                document.write("FizzBuzz"+"<br>")
                count++
            }else {
                document.write("Fizz" + "<br>")
                count++
            }
        } else if ( number % 5 === 0 ) {
            document.write("Buzz"+"<br>")
            count++
        }else {
            document.write(number+"<br>")
            count++
        }
        number++
    }
}

// ex7
function sumfibonacci(){
    let x1 = 0
    let x2 = 1
    let i = 0
    let x3
    let sum = 0

    while (i < 20) {
        document.write(x1 + "<br>")
        sum = sum + x1        //tong 20 so dau tien
        x3 = x1 + x2;
        x1 = x2
        x2 = x3
        i++
    }document.write("Tong 20 so dau tien bang: " + sum)
}

// ex8
function playgame(){
    let from = parseFloat(prompt("Hãy nhập khoảng số bắt đầu từ: "))
    let to = parseFloat(prompt(" Từ " + from + " đến :"))

    function random(from, to){
        from = Math.floor(from)
        to = Math.floor(to)
        return Math.floor(Math.random() * (to - from + 1)) + from;
    }
    let randomnumber = random(from, to)
    let numberguess = parseFloat(prompt("Nhập số bạn đoán trong khoảng bạn vừa nhập"))
    if ( numberguess === randomnumber ){
        alert("Chuc mung ban doan dung")
    }else {
        alert("Sai roi, ban co muon choi lai khong?")
    }
}