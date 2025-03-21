import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Livro } from "./livro";

@Entity("autores")
export class Autor {

    @PrimaryColumn()
    id_autor: string

    @Column({ nullable: false })
    nome: string
    
    @Column()
    nacionalidade: string

    constructor(){
        this.id_autor = uuid()
    }
}