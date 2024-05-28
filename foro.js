const msgCont = document.getElementById("messages");
const msgForm = document.getElementById("messageForm");
const msgText = document.getElementById("message");
const msgName = document.getElementById("username");
let target = msgCont;

msgForm.onsubmit = (e) => {
    e.preventDefault();
    renderMessages();
};

function renderMesages() {
    if (msgText.value.trim() !== "") {
        let msg = document.createElement("div");
        let btnResponder = document.createElement("button");
        let respuestas = document.createElement("div");

        btnResponder.classList.add("responder");
        btnResponder.innerHTML = "Responder";
        respuestas.classList.add("respuestas");

        msg.innerHTML = `
            <div>${msgText.value}</div>
            <strong>${msgName.value}</strong>
        `;
        msg.classList.add('message');
        msg.appendChild(btnResponder);
        msg.appendChild(respuestas);
        target.appendChild(msg);

        msgText.value = "";
        target = msgCont; 

        btnResponder.onclick = () => {
            console.log("Click en Responder");
            target = respuestas; 
            msgText.focus(); 
        };

        console.log("Terminó renderMessages");
    }
}