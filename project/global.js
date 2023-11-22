const body = $('body');
const darkModeBtn = $('#dark-mode-btn');
const contatoLinkBtn = $('#contato-link-btn');
const sobreNosLinkBtn = $('#sobre-nos-link-btn');

darkModeBtn.click(function (e) { 
    e.preventDefault();
    body.toggleClass('darkMode');
    darkModeBtn.text(body.hasClass('darkMode') ? 'Modo Claro' : 'Modo Escuro');
});

contatoLinkBtn.click(function (e) {
    e.preventDefault();
    
    $('html, body').animate({
        scrollTop: $('.support').offset().top
    }, 1000);
});

sobreNosLinkBtn.click(function (e) {
    e.preventDefault();
    
    $('html, body').animate({
        scrollTop: $('#footer').offset().top
    }, 1000);
});