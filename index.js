import express from 'express'
const app = express();

app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')

//liberar acesso a pasta public
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import mongoose from 'mongoose'
const url = "mongodb+srv://luan:luan@Classi.au203n7.mongodb.net/?retryWrites=true&w=majority&appName=Classi"


//converte o camimnho do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(__dirname + '/public'));

import routes from "./routes/route.js"
app.use(routes)

app.listen(3003)


