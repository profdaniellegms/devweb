import { DataSource } from "typeorm";

// Local Environment - Ambiente local
export const DevDataSource = new DataSource({
    type: "postgres", // SGBD
    host: "localhost", // host IP address
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "devweb",
    // entities: 
})