import mongoose from 'mongoose';
import express from "express";

mongoose
    .connect(
        'mongodb+srv://diegocastelogla:Ceara1914@cluster0.7o4miqx.mongodb.net/?retryWrites=true&w=majority'
    )
    .then( () => console.log('Banco de dados conectado'))
    .catch( () => console.log('Falha ao conectar ao banco de dados'));


const login_api = express()

