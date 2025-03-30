let tu = new Mobile();
let khanh = new Mobile();
function tuSendKhanh() {
//     b1: lay du lieu tu Tu
    let message=document.getElementById('tu').value;
    tu.writeDraft(message);
    tu.sendMessage(khanh);
    document.getElementById("inboxKhanh").innerHTML=
    khanh.inbox.join(",");
}
function khanhSendTu() {
    let message=document.getElementById('khanh').value;
    khanh.writeDraft(message);
    khanh.sendMessage(tu);
    document.getElementById("inboxTu").innerHTML
    =tu.inbox.join(",");
}
