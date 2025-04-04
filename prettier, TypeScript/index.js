document.addEventListener('DOMContentLoaded', function () {
    var num1Input = document.getElementById('num1');
    var num2Input = document.getElementById('num2');
    var operationSelect = document.getElementById('operation');
    var resultDiv = document.getElementById('result');
    var historyDiv = document.getElementById('history');
    function calculate() {
        var num1 = parseFloat(num1Input.value);
        var num2 = parseFloat(num2Input.value);
        var operation = operationSelect.value;
        var result;
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            case '**':
                result = Math.pow(num1, num2);
                break;
            default:
                result = NaN;
        }
        if (!isNaN(result)) {
            resultDiv.textContent = "\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(result, " \uD83D\uDE0A");
            var historyEntry = document.createElement('div');
            historyEntry.textContent = "".concat(num1, " ").concat(operation, " ").concat(num2, " = ").concat(result);
            historyDiv.appendChild(historyEntry);
        }
        else {
            resultDiv.textContent = 'Невірний ввід 😢';
        }
    }
    num1Input.addEventListener('input', calculate);
    num2Input.addEventListener('input', calculate);
    operationSelect.addEventListener('change', calculate);
});
