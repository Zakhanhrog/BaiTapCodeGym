let percent_Nokia = 10;
let percent_Iphone = 20;
let status_Nokia = "Off";
let status_Iphone = "Off";


//bat tat dien thoai
function Nokia_turnOn(){
    document.getElementById("statusOnOff_Nokia").innerHTML = "On";
    status_Nokia = document.getElementById("statusOnOff_Nokia").innerHTML;
    return status_Nokia;
}
function Nokia_turnOff(){

    document.getElementById("statusOnOff_Nokia").innerHTML = "Off";
    status_Nokia = document.getElementById("statusOnOff_Nokia").innerHTML;
    return status_Nokia; 
}
function Iphone_turnOn(){
    
    document.getElementById("statusOnOff_Iphone").innerHTML = "On"; 
    status_Iphone = document.getElementById("statusOnOff_Iphone").innerHTML;
    return status_Iphone;
}
function Iphone_turnOff(){
    
    document.getElementById("statusOnOff_Iphone").innerHTML = "Off";
    status_Iphone = document.getElementById("statusOnOff_Iphone").innerHTML;
    return status_Iphone;   
}
// xoa tin nhan 
function clear_Nokia(){
    document.getElementById("messaging_Nokia").value = "";
}
function clear_Iphone(){
    document.getElementById("messaging_Iphone").value = "";
}



// sac dien thoai
function Nokia_charge(){
    percent_Nokia = 100;
    document.getElementById("pinPercent_Nokia").innerHTML = percent_Nokia + "%";
}
function Iphone_charge(){
    percent_Iphone = 100;
    document.getElementById("pinPercent_Iphone").innerHTML = percent_Iphone + "%";
}



// gui, nhan tin nhan
class Mobile{
    message;

    constructor(message){
        this.message = message;
    }
    sendMessage_Nokia(){
        this.message = document.getElementById("messaging_Nokia").value;
        return this.message;
    }
    sendMessage_Iphone(){
        this.message = document.getElementById("messaging_Iphone").value;
        return this.message;
    }
    receiveMessage_Nokia(){
        this.message = document.getElementById("messaging_Iphone").value;
        return this.message;
    }
    receiveMessage_Iphone(){
        this.message = document.getElementById("messaging_Nokia").value;
        return this.message;
    }
    sended_Nokia(){
        this.message= document.getElementById("messaging_Nokia").value;
        return this.message;
    }
    sended_Iphone(){
        this.message = document.getElementById("messaging_Iphone").value;
        return this.message;
    }
}

function Nokia_sendMessage(){
    if (status_Nokia == "On"){
        
        if(percent_Nokia>0){
            let action = new Mobile();
            action.sendMessage_Nokia();
            document.getElementById("inbox_Iphone").innerHTML += action.sendMessage_Nokia() + "<br>";
            action.sended_Nokia();
            document.getElementById("sendedBox_Nokia").innerHTML += action.sended_Nokia() + "<br>";
            percent_Nokia--;
            document.getElementById("pinPercent_Nokia").innerHTML = percent_Nokia + "%";
        }else{
            alert("Hết pin, hay sạc điện thoại");
        }
    }else{
        alert("Hãy bật điện thoại");
    }


}
function Iphone_sendMessage(){
    if (status_Iphone == "On"){
        if(percent_Iphone>0){
            let action = new Mobile();
            action.sendMessage_Iphone();
            document.getElementById("inbox_Nokia").innerHTML += action.sendMessage_Iphone() + "<br>"; 
            action.sended_Iphone();
            document.getElementById("sendedBox_Iphone").innerHTML += action.sended_Iphone() + "<br>";
            percent_Iphone--;
            document.getElementById("pinPercent_Iphone").innerHTML = percent_Iphone + "%";
        }else{
            alert("Hết pin, hay sạc điện thoại");
        }
    }else{
        alert("Hãy bật điện thoại");
    }   
}
