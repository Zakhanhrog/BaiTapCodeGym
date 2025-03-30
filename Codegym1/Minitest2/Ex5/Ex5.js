let x1 = 0
let x2 = 1
let i = 0
let x3

while (i < 10) {
    document.write(x1 + "<br>")
    x3 = x1 + x2 ;
    x1 = x2
    x2 = x3
    i++
}