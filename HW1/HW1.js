const cols = document.getElementById("numCols");
const rows = document.getElementById("numRows");
const aBody = document.getElementById("tBody");
const aHead = document.getElementById("tHead");

// 10 -> 35: a -> z
// num.toString(36).toUpperCase()

const create = () => {
    let rows2 = Number(rows.value);
    let cols2 = Number(cols.value);
    let oneHead = '<th id="specialTh"></th>';
    let oneRow = '';
    let allRows = '';
    if (Number.isInteger(rows2) && Number.isInteger(cols2) && rows2 > 0 && cols2 > 0 && cols2 < 27) {
        for (let i = 0; i < cols2; i++) {
            oneRow += '<td></td>';
        }
        for (let i = 0; i < rows2; i++) {
            allRows += "<tr>" + `<td>${i+1}</td>` + oneRow + "</tr>";
        }

        for (let i = 0; i < cols2; i++) {
            oneHead += `<th>${(i+10).toString(36).toUpperCase()}</th>`;
        }
        aHead.innerHTML = oneHead;
        aBody.innerHTML = allRows;

    } else if (Number.isInteger(rows2) && Number.isInteger(cols2) && rows2 > 0 && cols2 > 0) {
        cols.value = rows.value = '';
        alert("The number of columns must be less than 27");
    } else {
        cols.value = rows.value = '';
        alert("Your input must be natural number(s)");
    }
}

const whiteOut = () => {
    cols.value = rows.value = '';
    aHead.innerHTML = '';
    aBody.innerHTML = '';
}