// Seleciona o botão "Criptografar"
const botaoCriptografar = document.getElementById('botao-crip');

// Adiciona um evento de clique ao botão
botaoCriptografar.addEventListener('click', function() {
    // Obtém o texto digitado no textarea
    let texto = document.getElementById('entrada-textarea').value;

    // Verifica se o textarea está vazio
    if (!texto.trim()) {
        return; // Encerra a função se o textarea estiver vazio
    }

    // Verifica se o texto já foi criptografado
    const secaoDireita = document.getElementById('section-dois');

    // Remove acentos e caracteres especiais usando expressões regulares
    texto = texto.toLowerCase().replace(/[áàâãä]/g, 'a')
                               .replace(/[éèêë]/g, 'e')
                               .replace(/[íìîï]/g, 'i')
                               .replace(/[óòôõö]/g, 'o')
                               .replace(/[úùûü]/g, 'u')
                               .replace(/[ç]/g, 'c')
                               .replace(/[^a-z\s]/g, ''); // Remove caracteres que não são letras minúsculas nem espaços

    // Aplica as regras de criptografia
    texto = texto.replace(/e/g, 'enter')
                 .replace(/i/g, 'imes')
                 .replace(/a/g, 'ai')
                 .replace(/o/g, 'ober')
                 .replace(/u/g, 'ufat');

    // Exibe o texto criptografado na seção da direita
    secaoDireita.innerHTML = `<textarea class="mensagem-criptografada">${texto}</textarea>`;

    // Adiciona botão de cópia após criptografar
    adicionarBotaoCopiar();
});

// iuri IURI íûrÌ

// Seleciona o botão "Descriptografar"
const botaoDescriptografar = document.getElementById('botao-descrip');

// Adiciona um evento de clique ao botão
botaoDescriptografar.addEventListener('click', function() {
    // Obtém o texto digitado no textarea
    let texto = document.getElementById('entrada-textarea').value;

    // Verifica se o textarea está vazio
    if (!texto.trim()) {
        return; // Encerra a função se o textarea estiver vazio
    }

    // Verifica se o texto já foi descriptografado
    const secaoDireita = document.getElementById('section-dois');

    // Aplica as regras de descriptografia
    texto = texto.replace(/enter/g, 'e')
                 .replace(/imes/g, 'i')
                 .replace(/ai/g, 'a')
                 .replace(/ober/g, 'o')
                 .replace(/ufat/g, 'u');

    // Exibe o texto descriptografado na seção da direita
    secaoDireita.innerHTML = `<textarea class="mensagem-criptografada">${texto}</textarea>`;

    // Adiciona botão de cópia após criptografar
    adicionarBotaoCopiar();
});

// Função para adicionar botão de cópia
function adicionarBotaoCopiar() {
    // Remove o botão de cópia anterior, se existir
    const botaoAnterior = document.getElementById('botao-copiar');
    if (botaoAnterior) {
        botaoAnterior.remove();
    }

    // Obtém o texto da segunda seção
    const textoSegundaSecao = document.getElementById('section-dois').textContent;

    // Cria um botão para copiar o texto
    const botaoCopiar = document.createElement('button');
    botaoCopiar.id = 'botao-copiar';
    botaoCopiar.textContent = 'Copiar';
    botaoCopiar.addEventListener('click', function() {
        // Copia o texto para a área de transferência
        navigator.clipboard.writeText(textoSegundaSecao)
    });

    // Adiciona o botão de cópia à segunda seção
    const divSegundaSecao = document.getElementById('section-dois');
    divSegundaSecao.appendChild(botaoCopiar);
}

// Adiciona um evento de input ao textarea
document.getElementById('entrada-textarea').addEventListener('input', function() {
    // Obtém o texto digitado no textarea
    let texto = this.value.trim();

    // Verifica se o textarea está vazio
    if (!texto) {
        // Limpa a seção da direita se o textarea estiver vazio
        const secaoDireita = document.getElementById('section-dois');
        secaoDireita.innerHTML = `
            <div class="section__dois__div">
                <img class="section__dois__img" src="./img/High quality products 1 1.svg" alt="Imagem de um pessoa olhado um diamante com uma bussula">
                <br>
                <span class="section__dois__span">Nenhuma mensagem encontrada</span>
                <p class="section__dois__p">Digite um texto que você deseja criptografar ou descriptografar.</p>
            </div>
        `;
    }
});