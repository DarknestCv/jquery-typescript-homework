document.addEventListener('DOMContentLoaded', () => {
    const num1Input = document.getElementById('num1') as HTMLInputElement;
    const num2Input = document.getElementById('num2') as HTMLInputElement;
    const operationSelect = document.getElementById('operation') as HTMLSelectElement;
    const resultDiv = document.getElementById('result') as HTMLDivElement;
    const historyDiv = document.getElementById('history') as HTMLDivElement;

    function calculate() {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);
        const operation = operationSelect.value;

        let result: number;
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
                result = num1 ** num2;
                break;
            default:
                result = NaN;
        }

        if (!isNaN(result)) {
            resultDiv.textContent = `Результат: ${result} 😊`;
            const historyEntry = document.createElement('div');
            historyEntry.textContent = `${num1} ${operation} ${num2} = ${result}`;
            historyDiv.appendChild(historyEntry);
        } else {
            resultDiv.textContent = 'Невірний ввід 😢';
        }
    }

    num1Input.addEventListener('input', calculate);
    num2Input.addEventListener('input', calculate);
    operationSelect.addEventListener('change', calculate);
});