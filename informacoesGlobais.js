const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente`
}

vizualizarInformacoesGlobais()

