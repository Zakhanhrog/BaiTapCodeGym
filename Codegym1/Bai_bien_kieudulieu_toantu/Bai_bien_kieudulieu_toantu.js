// Bài 1: Tính điểm trung bình

function diemtrungbinh() {

    let vatli = prompt("Nhập điểm Vật lí: ");
    let hoahoc = prompt("Nhập điểm Hóa Học: ");
    let sinhhoc = prompt(" Nhập điểm Sinh Học: ");
    let trungbinh;

        vatli = parseInt(vatli);
        hoahoc = parseInt(hoahoc);
        sinhhoc = parseInt(sinhhoc);
        trungbinh = parseInt(trungbinh);

            trungbinh = (vatli + hoahoc + sinhhoc) / 3
            document.getElementById("diemtrungbinh").innerHTML = "Điểm trung bình: " + trungbinh;
}

// Bài 2: Giá trị là độ 0C (Celsius) và chuyển nó sang độ 0F (Fahrenheit).

function quydoi() {
       let doF
       document.getElementById("doC").value;
       var doC = document.getElementById("doC").value;
       doF = (9*doC +160)/5
       document.getElementById("doF").innerText = "Result: " + doF;
}

//Bài 3: Chương trình tính diện tích hình tròn

function tinhdientich() {

    let bankinh = prompt("Nhập giá trị bán kính: ");
    let dientich

    bankinh = parseInt(bankinh);

    dientich = bankinh * bankinh * 3.14
    document.getElementById("dientich").innerHTML = "Diện tích hình tròn bằng: " + dientich;
}

//Bài 4: Chương trình tính chu vi hình tròn

function tinhchuvi(){

    let bk = prompt("Nhập giá trị bán kính:  ");
    let chuvi

        bk=parseInt(bk);

    chuvi = bk*3.14
    document.getElementById("chuvi").innerHTML = "Chu vi hình tròn bằng: " + chuvi;
}