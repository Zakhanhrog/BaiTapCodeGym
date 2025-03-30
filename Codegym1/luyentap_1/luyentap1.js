function sodu() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);

    if (isNaN(a) || isNaN(b)) {
        document.getElementById("c").innerHTML = "Vui lòng nhập số hợp lệ!";
        return;
    }

    if (b === 0) {
        document.getElementById("c").innerHTML = "a không thể chia cho b (b không thể là 0)";
        return;
    }

    if (a % b === 0) {
        document.getElementById("c").innerHTML = "a chia hết cho b";
    } else {
        document.getElementById("c").innerHTML = "a không chia hết cho b";
    }
}


function tuoi() {
    let a = parseInt(document.getElementById("1").value);
    if (a > 14) {
        document.getElementById("2").innerHTML = "Bạn đủ điều kiện học lớp 10";
    } else {
        document.getElementById("2").innerHTML = "Bạn chưa đủ điều kiện vào lớp 10";
    }
}

function so() {
    let a = parseInt(document.getElementById("3").value);
    let b = (a > 0) ? 1 : (a < 0) ? -1 : 0;

    switch (b) {
        case 1:
            document.getElementById("4").innerHTML = "Đây là số dương";
            break;
        case -1:
            document.getElementById("4").innerHTML = "Đây là số âm";
            break;
        case 0:
            document.getElementById("4").innerHTML = "Bạn vừa nhập số 0"
            break;
        default:
            document.getElementById("4").innerHTML = "Mời bạn nhập số"
    }
}

function sosanh() {
    let a = parseInt(document.getElementById("x").value);
    let b = parseInt(document.getElementById("y").value);
    let c = parseInt(document.getElementById("z").value);

    if (a >= b && a >= c) {
        document.getElementById("5").innerHTML = "a là số lớn nhất";
    } else if (b >= a && b >= c) {
        document.getElementById("5").innerHTML = "b là số lớn nhất";
    } else {
        document.getElementById("5").innerHTML = "c là số lớn nhất";
    }
}

function trungbinh() {
    let a = parseInt(document.getElementById("q").value);
    let b = parseInt(document.getElementById("w").value);
    let c = parseInt(document.getElementById("e").value);
    let d = (a+b+c)/3
    if (d >= 8) {
        document.getElementById("6").innerHTML = "Học sinh giỏi";
    } else if (d >= 6.5) {
        document.getElementById("6").innerHTML = "Học sinh khá";
    } else if (d >= 5) {
        document.getElementById("6").innerHTML = "Học sinh trung bình"
    } else {
        document.getElementById("6").innerHTML = "Học sinh yếu"
    }
}

function banhang() {
    let a = parseFloat(document.getElementById("7").value);
    let b = a*8 / 100
    document.getElementById("8").innerHTML= " Hoa hồng của bạn là : " + b ;
}

function cuoc() {
    let a = parseFloat(document.getElementById("9").value);
    let b = a*1090
    document.getElementById("10").innerHTML = "Số cước điện thoại của bạn là " + b ;
}