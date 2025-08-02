// 1. Exibir uma Mensagem de Boas-Vindas
window.addEventListener('load', function() {
    // Cria um elemento de mensagem
    const welcomeMessage = document.createElement('div');
    welcomeMessage.textContent = "Bem-vindo ao Mundo do Futebol! Aproveite sua visita.";
    welcomeMessage.style.position = 'fixed';
    welcomeMessage.style.top = '0';
    welcomeMessage.style.width = '100%';
    welcomeMessage.style.backgroundColor = '#4CAF50';
    welcomeMessage.style.color = 'white';
    welcomeMessage.style.padding = '15px';
    welcomeMessage.style.textAlign = 'center';
    welcomeMessage.style.zIndex = '1000';

    // Adiciona a mensagem ao topo do body
    document.body.prepend(welcomeMessage);

    // Remove a mensagem após 5 segundos
    setTimeout(() => {
        welcomeMessage.remove();
    }, 5000);
});

// 2. Contador de Caracteres no Campo de Comentário
const comentarioInput = document.getElementById('comentario');
const contador = document.createElement('small');
contador.style.display = 'block';
contador.style.marginTop = '5px';
comentarioInput.parentNode.insertBefore(contador, comentarioInput.nextSibling);

comentarioInput.addEventListener('input', function() {
    const maxChars = 200;
    const charsLeft = maxChars - comentarioInput.value.length;
    contador.textContent = `Caracteres restantes: ${charsLeft}`;

    // Muda a cor do contador se estiver perto do limite
    if (charsLeft <= 20) {
        contador.style.color = 'red';
    } else {
        contador.style.color = 'black';
    }
});











