function yeucau(){
    let username = document.getElementById("username").value;
    if(username == "Admin"){
        alert("Hãy nhập mật khẩu");
    }else if(username == "null"){
        alert("Canceled");
    }else {
        alert("I don't know you")
    }
}
function LOGIN(){
    let password = document.getElementById("password").value;
    if(password == "TheMaster"){
        alert("WELLCOME");
    }else if(password == "null"){
        alert("Canceled");
    }else {
        alert("Canceled")
    }
}
document.w