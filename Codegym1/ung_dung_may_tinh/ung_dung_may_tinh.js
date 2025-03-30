document.querySelectorAll(".button").forEach(button => {
    button.addEventListener("click", function() {
        const outputDiv = document.getElementById('output');
        const value = this.value;
        const newElement = document.createElement('div');
        newElement.textContent = value;
        outputDiv.appendChild(newElement);
    });
});
