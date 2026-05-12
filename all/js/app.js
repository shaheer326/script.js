function clear(){
    document.getElementById("result").value = "";
}

function screenvalue(){
    const r = document.getElementById("result");
    if (r.value === "enter an expression" || r.value === "invalid expression") r.value = "";
    r.value += value;
}

function calulateresult(){
    const resultElement = document.getElementById("result");
    const expression = resultElement.value.trim();

    if (expression === '') {
        resultElement.value = 'Enter an expression';
        return;
    }

    try {
        resultElement.value = eval(expression);
    } catch (e) {
        resultElement.value = 'invalid expression';
    }
}