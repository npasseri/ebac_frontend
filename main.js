const form = document.getElementById('form-comparacao')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')
const botao = document.getElementById('btn-comparar')

function campoBMaior(a, b) {
    return b > a
}

form.addEventListener('submit', function(e){

    e.preventDefault()

    // Desabilitando o botão
    botao.disabled = true;

    const mensagemSucesso = `<b>Válido</b>: O número <b>${campoB.value}</b> é maior que <b>${campoA.value}</b>.`
    const mensagemInsucesso = `<b>Inválido</b>: O número <b>${campoA.value}</b> é maior que <b>${campoB.value}</b>.`

    if (campoBMaior(campoA.value, campoB.value)) {
        const containerMensagem = document.querySelector('.mensagem-final')
        containerMensagem.innerHTML = mensagemSucesso
        containerMensagem.style.display = 'block'
        campoA.value = ''
        campoB.value = ''
    } else {
        const containerMensagem = document.querySelector('.mensagem-final')
        containerMensagem.innerHTML = mensagemInsucesso
        containerMensagem.style.display = 'block'
        campoA.value = ''
        campoB.value = ''
    }

    // Habilitando após o processamento
    botao.disabled = false;
})