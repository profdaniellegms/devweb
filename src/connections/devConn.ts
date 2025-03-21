import { DataSource } from "typeorm";
import { Usuario } from "../models/usuario";
import { Livros } from "../models/livro";
import { Autor } from "../models/autor";   
import { Emprestimos } from "../models/emprestimo";

// Local Environment - Ambiente local
export const DevDataSource = new DataSource({
    type: "postgres", // SGBD
    host: "localhost", // host IP address
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "devweb",
    entities: [Usuario, Livros, Autor, Emprestimos], // Models
})