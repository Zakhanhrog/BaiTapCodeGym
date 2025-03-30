// EX1: for
var N = 0
for (var i = 0; i <=5 ; i++) {
    document.write("The number is: " + N + "<br>")
    N ++
}

//EX2:
var numberinput = prompt("Enter number")
var sum = 0
for (i = 1; i <= numberinput; i++) {
    sum = sum +i;
}
document.write(sum);