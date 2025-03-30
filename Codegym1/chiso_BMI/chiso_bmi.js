function BMI(){
    let w = + document.getElementById("weight").value;
    let h = + document.getElementById("height").value;
    let BMI = w/(h*h)

    if (BMI < 18) {
        result=( BMI + " thiếu cân");
    } else if (BMI < 25) {
        result=( BMI + " vừa cân");
    } else if (BMI < 30) {
        result=( BMI + " thừa cân");
    } else {
        result=( BMI + " béo phì");
    }
    document.write(" Kết quả của bạn: " + result)
}