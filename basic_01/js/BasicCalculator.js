function add() {
    let resultAdd = Number(document.getElementById("fnumber1").value) + Number(document.getElementById("fnumber2").value);
    document.getElementById("result").innerHTML = "<p>Add: " + resultAdd + "</p>";
}

function minus() {
    let resultMinus = Number(document.getElementById("fnumber1").value) - Number(document.getElementById("fnumber2").value);
    document.getElementById("result").innerHTML = "<p>" + resultMinus + "</p>";
}

function division() {
    let resultDiv = Number(document.getElementById("fnumber1").value) / Number(document.getElementById("fnumber2").value);
    document.getElementById("result").innerHTML = "<p>" + resultDiv + "</p>";  
}

function multiplication() {
    let resultMult  = Number(document.getElementById("fnumber1").value) * Number(document.getElementById("fnumber2").value);
    document.getElementById("result").innerHTML = "<p>" + resultMult + "</p>";
}
00