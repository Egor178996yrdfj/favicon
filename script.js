let generatedCode = null;
let codeOwner = null;

function generateCode() {
    // Генерация случайного шестизначного кода
    generatedCode = Math.floor(100000 + Math.random() * 900000).toString();
    codeOwner = "user1"; // Здесь можно использовать уникальный идентификатор пользователя
    console.log("Сгенерированный код:", generatedCode);
    sendCodeToServer(generatedCode);
}

function sendCodeToServer(code) {
    // Здесь можно отправить код на сервер
    // Например, используя fetch или XMLHttpRequest
    console.log("Код отправлен на сервер:", code);
}

function checkCode() {
    const inputCode = document.getElementById('codeInput').value;
    const messageDiv = document.getElementById('message');

    if (inputCode === generatedCode && codeOwner !== "user1") {
        messageDiv.innerText = "Молодец";
        notifyCodeOwner();
    } else if (inputCode === generatedCode && codeOwner === "user1") {
        messageDiv.innerText = "Вы не можете ввести свой же код";
    } else {
        messageDiv.innerText = "Код неправильный";
    }
}

function notifyCodeOwner() {
    // Здесь можно отправить уведомление владельцу кода
    console.log("К вам зашёл человек");
}
