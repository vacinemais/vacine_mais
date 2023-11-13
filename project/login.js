const btnSelectEntrar = $("#btn-select-entrar");
const btnSelectCadastrar = $("#btn-select-cadastrar");
const entrarForm = $("#entrar-form");
const cadastrarForm = $("#cadastrar-form");

import mongoose from 'mongoose';
import express from "express";
import User from './models/user.js'
mongoose
    .connect(
        'mongodb+srv://diegocastelogla:Ceara1914@cluster0.7o4miqx.mongodb.net/?retryWrites=true&w=majority'
    )
    .then( () => console.log('Banco de dados conectado'))
    .catch( () => console.log('Falha ao conectar ao banco de dados'));


const login_api = express()

login_api.post('/users', async (request, response)=>{
    const user = request.body

    const newUser = await User.create(user)

    return response.status(201).json()

})

login_api.get('/users', async (request, response)=>{
    const users = await User.find()

    return response.status(200).json(users)
})

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