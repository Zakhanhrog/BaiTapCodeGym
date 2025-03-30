let table, i, j
let result
table = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
for (i=1 ; i<=10; i++) {
    table = table + "<tr>"
    for (j = 1; j <= 10; j++) {
        result = i*j
        table = table + "<td>" + i + "*" + j + "=" + result + "</td>"
    }
    table = table + "</tr>"
}
table = table + "</table>"
document.write(table);