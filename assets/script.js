
// Menu 
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const dropdownMenu = document.getElementById('dropdownMenu');

    menuToggle.addEventListener('click', function () {
        if (dropdownMenu.style.left === '0px') {
            dropdownMenu.style.left = '-100%';
        } else {
            dropdownMenu.style.left = '0';
        }
    });

    document.addEventListener('click', function (event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.left = '-100%';
        }
    });
});

// barra de pesquisa com menu 
// Evento para abrir/fechar a barra de pesquisa ao clicar no ícone de pesquisa
document.getElementById('searchIcon').addEventListener('click', function() {
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    searchContainer.classList.toggle('active');
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        document.getElementById('searchField').focus();
    }
});

// Evento para capturar o Enter na barra de pesquisa
document.getElementById('searchField').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const query = event.target.value;
        // Processa a pesquisa
        console.log('Pesquisar por:', query);
        // Adicione sua lógica de pesquisa aqui
    }
});

// Evento para fechar a barra de pesquisa ao clicar fora dela
document.addEventListener('click', function(event) {
    const searchContainer = document.getElementById('searchContainer');
    const searchInput = document.getElementById('searchInput');
    const searchIcon = document.getElementById('searchIcon');

    // Verifica se o clique foi fora do container de pesquisa e do ícone de pesquisa
    if (!searchContainer.contains(event.target) && !searchIcon.contains(event.target)) {
        if (searchContainer.classList.contains('active')) {
            searchContainer.classList.remove('active');
            searchInput.classList.remove('active');
        }
    }
});


// Validação de cadastro dos usuarios 
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = event.target.nome.value.trim();
    const email = event.target.email.value.trim();
    const telefone = event.target.telefone.value.trim();
    const senha = event.target.senha.value.trim();
    const confirmacaoSenha = event.target.confirmacao_senha.value.trim();

    // Validação de campos obrigatórios
    if (!nome || !email || !telefone || !senha || !confirmacaoSenha) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Validação de formato de e-mail
    if (!validateEmail(email)) {
        alert('Por favor, insira um e-mail válido.');
        return;
    }

    // Validação de número de telefone (exemplo simples)
    if (!validatePhoneNumber(telefone)) {
        alert('Por favor, insira um número de telefone válido.');
        return;
    }

    // Validação de confirmação de senha
    if (senha !== confirmacaoSenha) {
        alert('As senhas não coincidem.');
        return;
    }

    // Exibir mensagem de sucesso
    document.getElementById('successMessage').classList.remove('hidden');

    // Resetar formulário após um breve atraso
    setTimeout(() => {
        document.getElementById('cadastroForm').reset();
        document.getElementById('successMessage').classList.add('hidden');
    }, 3000);
});

// Validação de formato de e-mail
function validateEmail(email) {
    // Expressão regular para validar um e-mail
    // ReGex = Regular Expression
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Validação de número de telefone
function validatePhoneNumber(phone) { 
    // Número de telefone com 10 ou 11 dígitos
    const re = /^\d{10,11}$/;
    return re.test(phone);
}

