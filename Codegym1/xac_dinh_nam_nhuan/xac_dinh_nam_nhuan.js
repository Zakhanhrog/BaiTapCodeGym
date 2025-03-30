let year = prompt(" Hãy nhập năm: ");
year = parseInt(year);
document.getElementById("Hiển thị năm").innerHTML = "Năm nhập năm: "+ year;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            document.getElementById("hienthi").innerHTML = "Năm nhuận";
        } else {
            document.getElementById("hienthi").innerHTML = "Không phải Năm nhuận";
        }
        } else {
        document.getElementById("hienthi").innerHTML = "Năm nhuận";
    }
}else{
    document.getElementById("hienthi").innerHTML = " Không phải năm nhuận";
}
