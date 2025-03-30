function doc() {
    let a = parseFloat(document.getElementById("1").value);
    let b = a * 9/5 + 32
    document.getElementById("2").innerText = b + " độ F";
}

function dom() {
    let a = parseFloat(document.getElementById("3").value);
    let b = a * 3.2808
    document.getElementById("4").innerText = b + " Feet";
}

function dtvuong() {
    let a = parseFloat(document.getElementById("5").value);
    let b = a*a
    document.getElementById("6").innerText ="Diện tích hình vuông = " + b;
}

function dtchunhat() {
    let a = parseFloat(document.getElementById("width").value);
    let b = parseFloat(document.getElementById("height").value);
    let c = a*b
    document.getElementById("7").innerText = "Diện tích hình chữ nhật = " + c ;
}

function dttamgiac() {
    let a = parseFloat(document.getElementById("8").value);
    let b = parseFloat(document.getElementById("9").value);
    let c = a*b
    document.getElementById("10").innerText = "Diện tích tam giác vuông = " + c;
}

function giaiPT() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let ketqua = document.getElementById("ketqua");

    if (a === 0) {
        ketqua.innerHTML = (b === 0) ? "Vô số nghiệm" : "Vô nghiệm";
    } else {
        ketqua.innerHTML = "Nghiệm x = " + (-b / a).toFixed(2);
    }
}

function giaiPTBac2() {
    let a = parseFloat(document.getElementById("x").value);
    let b = parseFloat(document.getElementById("y").value);
    let c = parseFloat(document.getElementById("z").value);
    let ketqua = document.getElementById("ketqua2");

    if (a === 0) {
        // Nếu a = 0, chuyển về phương trình bậc 1: bx + c = 0
        if (b === 0) {
            ketqua.innerHTML = (c === 0) ? "Vô số nghiệm" : "Vô nghiệm";
        } else {
            ketqua.innerHTML = "Nghiệm x = " + (-c / b).toFixed(2);
        }
        return;
    }

    let delta = b * b - 4 * a * c;

    if (delta < 0) {
        ketqua.innerHTML = "Phương trình vô nghiệm!";
    } else if (delta === 0) {
        let x = -b / (2 * a);
        ketqua.innerHTML = "Phương trình có nghiệm kép: x = " + x.toFixed(2);
    } else {
        let x1 = (-b + Math.sqrt(delta)) / (2 * a);
        let x2 = (-b - Math.sqrt(delta)) / (2 * a);
        ketqua.innerHTML = `Nghiệm x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
    }
}

function kttuoi() {
    let a = parseFloat(document.getElementById("11").value);
    if ( 0 < a < 120 ) {
        document.getElementById("12").innerHTML = a + " Đây là tuổi của 1 người";
    } else {
        document.getElementById("12").innerHTML = a + " Đây không phải tuổi của 1 người";
    }
}

function tamcanh() {
    let a = parseFloat(document.getElementById("q").value);
    let b = parseFloat(document.getElementById("w").value);
    let c = parseFloat(document.getElementById("e").value);
    if ( a,b,c > 0 && a + b > c && a + c > b && b + c > a  ) {
        document.getElementById("13").innerHTML = " a,b,c là 1 cạnh của 1 tam giác";
    } else {
        document.getElementById("13").innerHTML = " a,b,c không phải là cạnh của 1 tam giác" ;
    }
}

function tinhTienDien() {
    let kwh = parseFloat(document.getElementById("kwh").value);
    let tien = 0;

    if (kwh <= 0) {
        document.getElementById("ketqua3").innerHTML = "Vui lòng nhập số kWh hợp lệ!";
        return;
    }

    if (kwh <= 50) {
        tien = kwh * 1728;
    } else if (kwh <= 100) {
        tien = 50 * 1728 + (kwh - 50) * 2074;
    } else if (kwh <= 200) {
        tien = 50 * 1728 + 50 * 2074 + (kwh - 100) * 2612;
    } else if (kwh <= 300) {
        tien = 50 * 1728 + 50 * 2074 + 100 * 2612 + (kwh - 200) * 3111;
    } else if (kwh <= 400) {
        tien = 50 * 1728 + 50 * 2074 + 100 * 2612 + 100 * 3111 + (kwh - 300) * 3450;
    } else {
        tien = 50 * 1728 + 50 * 2074 + 100 * 2612 + 100 * 3111 + 100 * 3450 + (kwh - 400) * 3685;
    }

    document.getElementById("ketqua3").innerHTML = `Tổng tiền điện: ${tien.toLocaleString()} VNĐ`;
}

function tinhThue() {
    let thuNhap = parseFloat(document.getElementById("thuNhap").value);
    let thue = 0;

    if (thuNhap <= 11000000) thue = 0;
    else if (thuNhap <= 17000000) thue = (thuNhap - 11000000) * 0.1;
    else if (thuNhap <= 30000000) thue = (thuNhap - 17000000) * 0.15 + 600000;
    else thue = (thuNhap - 30000000) * 0.2 + 2550000;

    document.getElementById("ketQuaThue").innerText = "Thuế thu nhập: " + thue.toLocaleString() + " VNĐ";
}

function tinhLai() {
    let goc = parseFloat(document.getElementById("goc").value);
    let thang = parseInt(document.getElementById("thang").value);
    let laiSuat = parseFloat(document.getElementById("laiSuat").value) / 100;

    let tongTien = goc * Math.pow(1 + laiSuat, thang);
    document.getElementById("ketQuaLai").innerText = "Số tiền sau " + thang + " tháng: " + tongTien.toLocaleString() + " VNĐ";
}