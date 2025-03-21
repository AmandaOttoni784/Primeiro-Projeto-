document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evitar o envio real do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Mensagem enviada com sucesso!\nNome: ${name}\nE-mail: ${email}\nMensagem: ${message}`);
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
