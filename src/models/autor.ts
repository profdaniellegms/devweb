import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Livro } from "./livro";

@Entity("autores")
export class Autor {
    @PrimaryColumn()
    id_autor: string;

    @Column({nullable : false})
    nome: string;

    @Column()
    nacionalidade: string;

    @OneToMany(() => Livro, livro => livro.fk_autor)
    livros: Livro[];

    constructor(){
        this.id_autor = uuid();
    }
}