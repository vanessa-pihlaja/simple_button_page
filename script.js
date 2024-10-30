// script.js

const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    const responseMessage = document.createElement("p");
    responseMessage.textContent = "Thank you for clicking. Now go and enjoy your day.";
    responseMessage.classList.add("response-message");

    button.replaceWith(responseMessage);
});