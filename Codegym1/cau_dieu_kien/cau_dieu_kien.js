let day
switch (new Date().getDay()) {
    case 0:
        day = "Chủ nhật";
        break;
    case 1:
        day= "Thứ Hai"
        break;
    case 2:
        day= "Thứ ba"
        break;
    case 3:
        day= "Thứ tư"
        break;
    case 4:
        day= "Thứ năm"
        break;
    case 5:
        day= "Thứ sáu"
        break;
    case 6:
        day= "Thứ bảy"
        break;
    default:
        day= "không xác định"
}

document.getElementById("hienthi").innerHTML = "Dạ thưa ông chủ hôm nay là: " +day;