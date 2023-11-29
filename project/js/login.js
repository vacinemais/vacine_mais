const btnSelectEntrar = $("#btn-select-entrar");
const btnSelectCadastrar = $("#btn-select-cadastrar");
const entrarForm = $("#entrar-form");
const cadastrarForm = $("#cadastrar-form");

function logar() {
    let email =  $('#entrar-form #ip-email').val()
    
    $.ajax({
      type: 'GET',
      url: `http://localhost:7123/user/${email}`,
      success: function (response) {
        console.log('Sucesso:', response);
        location.reload();
      },
      error: function (error) {
        console.error('Erro:', error);
      }
    });
}

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
    
    // $('#entrar-form form').submit(function (e) {
    //     e.preventDefault();
    
    //     let formData = {
    //       email: $('#entrar-form #ip-email').val(),
    //       password: $('#entrar-form #ip-senha').val(),
    //     };
    //     let email =  $('#entrar-form #ip-email').val()
    
      
    //   });
});

