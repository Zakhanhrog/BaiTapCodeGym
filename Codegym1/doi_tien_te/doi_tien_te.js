const quydoi = {
    "USDVND": 23000,
    "VNDUSD": 0.000043,
    "VNDVND": 1,
    "USDUSD": 1
}
function convert() {
    const amount = document.getElementById("amount").value;
    const tien1 = document.getElementById("tien1").value;
    const tien2 = document.getElementById("tien2").value;

    const Key = tien1 + tien2;
    const change = quydoi[Key];

    if (change) {
        const result = amount * change;
        document.getElementById("ketqua").innerText = "Result: " + result;
    } else {
        document.getElementById("ketqua").innerText = "Error";
    }
}