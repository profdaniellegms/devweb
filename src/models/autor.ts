import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Livro } from "./livro";

@Entity("autores")
export class Autor {

    @PrimaryColumn()
    id_autor: string

    @Column({ nullable: false })
    nome: string
    
    @Column({ nullable: false })
    nacionalidade: string

    @Column({ type: "boolean", default: true })
    ativo: boolean; // Adicionando a flag ativo

    @OneToMany(() => Livro, livro => livro.autor) 
    livros: Livro[];  
    

    constructor(){
        this.id_autor = uuid();
        this.ativo = true; 
    }
}