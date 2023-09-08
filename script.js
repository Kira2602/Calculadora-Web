document.addEventListener("DOMContentLoaded", function () {
    const operationDisplay = document.getElementById("operation");
    const resultDisplay = document.getElementById("result");
    const buttons = document.querySelectorAll(".calculator button");

    let currentOperation = "0"; // Almacena la concatenación de la operación
    let currentResult = "0"; // Almacena el resultado actual

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (button.id === "clear") {
                currentOperation = "0";
                currentResult = "0";
            } else if (button.id === "equals") {
                try {
                    currentResult = eval(currentOperation);
                } catch (error) {
                    currentResult = "Error";
                }
            } else if (button.id === "backspace") {
                currentOperation = currentOperation.slice(0, -1);
            } else {
                if (currentOperation === "0" || currentResult !== "0") {
                    // Si la operación es "0" o ya hay un resultado, comienza una nueva operación
                    currentOperation = button.textContent;
                    currentResult = "0";
                } else {
                    currentOperation += button.textContent;
                }
            }

            operationDisplay.value = currentOperation;
            resultDisplay.value = currentResult;
        });
    });
});
