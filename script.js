$(document).ready(function() {
    // 1. Efeito Interativo: Toggle do Menu Móvel (movido do HTML)
    $(".menu_btn").click(function(){
        $(".menu-mobile").slideToggle("slow");
    });


    // 2. Validação do Formulário de Contato (seção #contact)
    $("#contactForm").submit(function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        let isValid = true;
        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const message = $("#message").val().trim();
        const formMessages = $("#formMessages");

        formMessages.empty(); // Limpa mensagens anteriores

        if (name === "") {
            formMessages.append("<p style='color: red;'>Por favor, insira seu nome.</p>");
            isValid = false;
        }
        if (email === "") {
            formMessages.append("<p style='color: red;'>Por favor, insira seu email.</p>");
            isValid = false;
        } else if (!isValidEmail(email)) {
            formMessages.append("<p style='color: red;'>Por favor, insira um email válido.</p>");
            isValid = false;
        }
        if (message === "") {
            formMessages.append("<p style='color: red;'>Por favor, insira sua mensagem.</p>");
            isValid = false;
        }

        if (isValid) {
            formMessages.append("<p style='color: green;'>Mensagem enviada com sucesso!</p>");
            // Em um projeto real, aqui envia os dados para um servidor (AJAX)
            // Por enquanto, apenas exibimos a mensagem e limpamos o formulário
            $("#contactForm")[0].reset(); // Limpa todos os campos do formulário
        }
    });

    // 3.Função auxiliar para validar o formato do email
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
});