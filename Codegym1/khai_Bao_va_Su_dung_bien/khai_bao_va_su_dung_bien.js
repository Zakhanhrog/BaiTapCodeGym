// nhập số và kiểm tra xem số nào là bội số nào
document.write("<b>Nhập số và kiểm tra</b>");
document.write("<br/>");


let a = prompt("Nhập số thứ nhất: ")
let b = prompt("Nhập số thứ hai: ")

a = parseFloat(a);
b = parseFloat(b);

if (a !== 0 && b !== 0) {
    if (a % b === 0) {
        alert(a + " là bội số của " + b);
        document.write(a + " là bội số của " + b);
        document.write("<br/>");
    } else {
        if (b % a === 0) {
            alert(b + " là bội số của " + a);
            document.write(b + " là bội số của " + a);
            document.write("<br/>");
        }else {
            alert("Hai số không phải bội số của nhau");
            document.write("Hai số không phải bội số của nhau");
            document.write("<br/>");
        }
    }
  }

// khai bao biến
document.write("<b>Khai bao biến</b>");
document.write("<br/>");

let i=10
let f= 20.5
let x =true
let s="Hà Nội"
document.write("i = " +i);
document.write("<br/>");
document.write("f = " +f);
document.write("<br/>");
document.write("b = " +x);
document.write("<br/>");
document.write("s = " +s);
document.write("<br/>");

// tính diện tích hình chữ nhật
document.write("<b>Tính diện tích hình chữ nhật</b>");
document.write("<br/>");
let width = 10
let height = 20
document.write("Diện tích = " + width*height);
document.write("<br/>");

