const btnSelectEntrar = $("#btn-select-entrar");
const btnSelectCadastrar = $("#btn-select-cadastrar");
const entrarForm = $("#entrar-form");
const cadastrarForm = $("#cadastrar-form");

$(document).ready(function () {
    // Inicialmente, exibir o formulário de login e ocultar o de registro
    entrarForm.show();
    cadastrarForm.hide();

    // Quando o botão "Entrar" for clicado
    btnSelectEntrar.click(function () {
        entrarForm.show();
        cadastrarForm.hide();
    });

    // Quando o botão "Cadastrar" for clicado
    btnSelectCadastrar.click(function () {
        entrarForm.hide();
        cadastrarForm.show();
    });
});