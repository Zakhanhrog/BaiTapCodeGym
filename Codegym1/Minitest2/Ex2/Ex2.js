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