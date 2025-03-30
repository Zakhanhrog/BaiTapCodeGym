function valueinput(value){
    document.getElementById("Calculator-display").value += value;
}
function valueclear(){
    document.getElementById("Calculator-display").value = "";
}
function CalEqual(){
    try {
        let result = eval(document.getElementById("Calculator-display").value);
        document.getElementById("Calculator-display").value = result;
    } catch (error) {
        alert("error");
    }
}