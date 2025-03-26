import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
import { Livros } from "./livros";

@Entity("autores")
export class Autores {

    @PrimaryColumn()
    id_autores: number

    @Column({ nullable: false })
    titulo: string
    
    @Column({ nullable: false })
    ano: number
    
    @Column({ nullable: false })
    edicao: number

    @Column({ nullable: false })
    editora: number

    @OneToMany(()=>Livros, livros => livros.fk_autor)
    @Column({ nullable: false })
    livros: Livros[]
}