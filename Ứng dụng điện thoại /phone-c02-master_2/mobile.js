class Mobile{
    pin;
    status;
    draft;
    inbox;
    sent;
//     mac dinh dang tat
//     thu nhap, inbox, sent rong
//     pin: 100;

    constructor() {
        this.pin=100;
        this.status=false;
        this.draft="";
        this.inbox=[];
        this.sent=[];
    }
//     co chuoi -> thu nhap
    writeDraft(message){
        this.draft=message;
    }

//     gui tin nhan
//     dau la dien thoai nhan newPhone
//     1. Chuyen thu nhap vao thu da nhan cua newPhone
//     2. Chuyen thu nhap vao thu da gui cua dt hien tai
//     3. Xoa thu nhap
    sendMessage(newPhone){
        let message=this.draft;
        newPhone.inbox.push(message);
        this.sent.push(message);
        this.draft="";
    }
}
