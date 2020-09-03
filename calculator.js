function deleteNumber() {
    var displayResult = document.getElementById("result-display");
    displayResult.value = displayResult.value.slice(0, -1);
}