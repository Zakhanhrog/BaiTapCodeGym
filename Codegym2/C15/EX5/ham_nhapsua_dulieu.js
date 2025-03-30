
let products = [];
let editingIndex = -1; // Biến lưu index của sản phẩm đang sửa



// Hiển thị danh sách sản phẩm
function displayProducts() {
    const tableMain = document.querySelector("#product-table tbody");
    tableMain.innerHTML = ""; // Xóa nội dung cũ

    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const row = `
                    <tr>
                        <td>${i+1}</td>
                        <td >${product}</td>
                        <td>
                            <button onclick="deleteProduct(${i})">Delete</button> 
                            <button onclick="editProduct(${i})">Edit</button>
                        </td>
                    </tr>
                `;
        tableMain.innerHTML += row;
    }
}


function addProduct() {
    const newProductName = document.getElementById("new-product-name").value;
    if (newProductName.trim() !== "") {
        products.push(newProductName);
        document.getElementById("new-product-name").value = "";
        document.getElementById("add-message").textContent = "Đã thêm sản phẩm!";
        displayProducts();
        setTimeout(() => {
            document.getElementById("add-message").textContent = "";
        }, 2000);
    } else {
        alert("Vui lòng nhập tên sản phẩm.");
    }
}


function editProduct(index) {
    editingIndex = index;
    document.getElementById("edit-product-name").value = products[index];
    document.getElementById("edit-product").style.display = "block"
}


function updateProduct() {
    if (editingIndex !== -1) {
        const newName = document.getElementById("edit-product-name").value;
        if (newName.trim() !== "") {
            products[editingIndex] = newName;
            document.getElementById("edit-product").style.display = "none";
            editingIndex = -1;
            displayProducts();
        } else {
            alert("Tên sản phẩm không được để trống.");
        }
    }
}


function cancelEdit() {
    document.getElementById("edit-product").style.display = "none";
    editingIndex = -1;
}


function deleteProduct(index) {
    if (confirm("Bạn có chắc chắn muốn xóa sản phẩm này?")) {
        products.splice(index, 1);
        displayProducts();
    }
}


displayProducts();