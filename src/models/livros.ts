import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Autores } from "./autores";

@Entity("livros")
export class Livros {

    @PrimaryColumn()
    id_livros: number

    @Column({ nullable: false })
    nome_completo: string
    
    @Column({ nullable: false })
    nacionalidade: string

    @ManyToOne(()=> Autores, autores => autores.livros)
    @JoinColumn({name :"id_autores"})
    @Column({ nullable: false })
    fk_autor: number
}