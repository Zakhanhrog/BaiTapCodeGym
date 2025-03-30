// // const englishWords = ["hello", "world", "cat", "dog", "house"];
// // const vietnameseWords = ["xin chào", "thế giới", "mèo", "chó", "nhà"];
// //
// // function translate() {
// //     const searchWord = document.getElementById("searchWord").value.toLowerCase();
// //     const resultDiv = document.getElementById("result");
// //
// //     const index = englishWords.indexOf(searchWord);
// //
// //     if (index !== -1) {
// //         resultDiv.textContent = "Nghĩa tiếng Việt: " + vietnameseWords[index];
// //     } else {
// //         resultDiv.textContent = "Không tìm thấy từ này.";
// //     }
// // }
//
// // let a = [2, 3, 4, 5];
// // let a2 = [-2, 3, 4, -5];
// // let a3 = [21, -3, 4, 5];
// // let a4 = [2, 31, 54, 55];
// // let x = [a, a2, a3, a4];
//
// //     let Rows = x.length;
// //     let Cols = x[0].length;
// //
// //
// //     let tongHang = [];
// //     for (let i = 0; i < Rows; i++) {
// //         let sum = 0;
// //         for (let j = 0; j < Cols; j++) {
// //             sum += x[i][j];
// //         }
// //         tongHang.push(sum);
// //     }
// //
// //     let tongCot = [];
// //     for (let j = 0; j < Cols; j++) {
// //         let sum = 0;
// //         for (let i = 0; i < Rows; i++) {
// //             sum += x[i][j];
// //         }
// //         tongCot.push(sum);
// //     }
// //
// //
// // console.log("Tổng theo hàng:", ketQua.hang);
// // console.log("Tổng theo cột:", ketQua.cot);
//
// let a = [2, 3, 4, 5];
// let a2 = [-2, 3, 4, -5];
// let a3 = [21, -3, 4, 5];
// let a4 = [2, 31, 54, 55];
// let x = [a, a2, a3, a4];
// let sum = 0
//
// // for (let i = 0; i < x.length; i++) {
// //     for (let j = 0; j < x[i].length; j++) {
// //         if (i===j) {
// //             sum = sum + x[i][j];
// //             break;
// //         }
// //     }
// }for (let i = 0; i < x.length; i++) {
//     for (let j = 0; j < x[i].length; j++) {
//
//             sum = sum + x[i][j];
//     }
// }
// console.log(sum);
//
