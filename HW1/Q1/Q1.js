const cols = document.getElementById("numCols"),
    rows = document.getElementById("numRows"),
    aBody = document.getElementById("tBody"),
    aHead = document.getElementById("tHead");

// 10 -> 35: a -> z
// num.toString(36).toUpperCase()

const create = () => {
    let rows2 = Number(rows.value),
        cols2 = Number(cols.value),
        oneHead = '<th id="specialTh"></th>',
        oneRow = '',
        allRows = '';

    if (Number.isInteger(rows2) && Number.isInteger(cols2) && rows2 > 0 && cols2 > 0) {
        if (cols2 < 27) {
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

        } else {
            cols.value = '';
            alert("The number of columns must be less than 27");
        }
    } else {
        cols.value = rows.value = '';
        alert("Your input must be natural numbers");
    }
}


const whiteOut = () => {
    cols.value = rows.value = '';
    aHead.innerHTML = '';
    aBody.innerHTML = '';
}