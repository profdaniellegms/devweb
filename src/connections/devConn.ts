import { DataSource } from "typeorm";
import { Usuario } from "../models/usuario";
import { Autor } from "../models/autor";
import { Livro } from "../models/livro";
import { Emprestimo } from "../models/emprestimo";

// Local Environment - Ambiente local
export const DevDataSource = new DataSource({
  type: "postgres", // SGBD
  host: "localhost", // host IP address
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "devweb",
  entities: [Usuario, Autor, Livro, Emprestimo],
});
