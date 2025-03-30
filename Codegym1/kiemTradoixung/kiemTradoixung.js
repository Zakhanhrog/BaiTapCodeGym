function isPalindrome(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function kiemTra() {
    const chuoiNhap = document.getElementById("chuoi").value;
    const ketQua = isPalindrome(chuoiNhap);
    const ketQuaElement = document.getElementById("ketQua");

    if (ketQua) {
        ketQuaElement.textContent = chuoiNhap + " là chuỗi đối xứng";
    } else {
        ketQuaElement.textContent = chuoiNhap + " không phải chuỗi đối xứng";
    }
}