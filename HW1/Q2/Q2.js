const fNum = document.getElementById('first');
const seNum = document.getElementById('second');
const theDiv = document.getElementsByTagName("div")[0];
let small, big;

const findPrime = () => {
    let arrPrime = [];
    theDiv.textContent = '';
    let fVal = fNum.value;
    let seVal = seNum.value;
    if (fVal <= seVal) {
        small = Math.ceil(fVal);
        big = Math.floor(seVal);
    } else {
        big = Math.floor(fVal);
        small = Math.ceil(seVal);
    }
    if (big < 2) {
        theDiv.textContent = "No prime number can be found.";
    } else if (small < 2) {
        small = 2;
        for (let i = small; i <= big; i++) {
            if (filterPrime(i)) {
                arrPrime.push(i);
            }
        }
        if (arrPrime.length === 1) {
            theDiv.textContent = `The only prime number is ${arrPrime}.`;
        } else {
            theDiv.textContent = `The prime numbers are ${arrPrime}.`;
        }

    } else {
        for (let i = small; i <= big; i++) {
            if (filterPrime(i)) {
                arrPrime.push(i);
            }
        }
        if (arrPrime.length === 1) {
            theDiv.textContent = `The only prime number is ${arrPrime}.`;
        } else {
            theDiv.textContent = `The prime numbers are ${arrPrime}.`;
        }
    }
}

const filterPrime = (num) => {
    if (num === 2) {
        return true;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}