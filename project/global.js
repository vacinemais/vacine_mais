const body = $('body');
const darkModeBtn = $('#dark-mode-btn');

darkModeBtn.click(function (e) { 
    e.preventDefault();
    body.toggleClass('darkMode');
    darkModeBtn.text(body.hasClass('darkMode') ? 'Modo Claro' : 'Modo Escuro');
});
