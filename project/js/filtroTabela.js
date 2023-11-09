const input_filtro = document.getElementById('input-filtro');
const tabela_vacinas = document.getElementById('tabela-vacinas');

input_filtro.addEventListener('keyup', () => {
    let expressao = input_filtro.value.toLowerCase();

    if (expressao.length === 1) {
        return;
    }

    let linhas = tabela_vacinas.getElementsByTagName('tr');

    for (let posicao in linhas) {
        if (true === isNaN(posicao)) {
            continue;
        }

        let conteudoDaLinha = linhas[posicao].innerHTML.toLowerCase();

        if (true === conteudoDaLinha.includes(expressao)) {
            linhas[posicao].style.display = '';
        } else {
            linhas[posicao].style.display = 'none';
        }
    }
});