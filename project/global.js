const body = $('body');
const darkModeBtn = $('#dark-mode-btn');
const contatoScrollBtn = $('.contato-scroll-btn');
const sobreNosScrollBtn = $('.sobre-nos-scroll-btn');
const inicioScrollBtn = $('.inicio-scroll-btn');
const notificacaoScrollBtn = $('.notificacao-scroll-btn');

const contatoLinkBtn = $('.contato-link-btn');

darkModeBtn.click(function (e) {
    e.preventDefault();
    body.toggleClass('darkMode');
    darkModeBtn.text(body.hasClass('darkMode') ? 'Modo Claro' : 'Modo Escuro');
});

function scrollAnimation(query) {
    $('html, body').animate({
        scrollTop: $(query).offset().top
    }, 1000);
}

contatoScrollBtn.click(function (e) {
    e.preventDefault();

    scrollAnimation('.support');
});

sobreNosScrollBtn.click(function (e) {
    e.preventDefault();

    scrollAnimation('#footer');
});

inicioScrollBtn.click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: 0
    }, 1000);
});

notificacaoScrollBtn.click(function (e) {
    e.preventDefault();

    scrollAnimation('.newsletter');
});

