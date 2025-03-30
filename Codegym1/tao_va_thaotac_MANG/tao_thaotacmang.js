let arraymain = Array()
let a= 0

function add_value_array() {
    arraymain[a] = document.getElementById("input").value;
    document.getElementById("alert").innerHTML = "<i>Added emlement</i> " + arraymain[a] + " <i>at index</i> " + a;
    a++;
    document.getElementById("input").value = "";
}

function display_out(){
    let result = ""
    for (i= 0; i < arraymain.length; i++){
        result += "Element " + i + " : " + arraymain[i] + "<br>"
    }
    document.getElementById("displayout").innerHTML = result;
}

function reverse_element(){
    result=arraymain.reverse();
    document.getElementById("displayout").innerHTML = result;
}