import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Autor } from "./autor";

@Entity("livros")
export class Livro {
    @PrimaryColumn()
    id_livro: string;

    @Column({nullable: false})
    titulo: string;

    @Column({nullable: false})
    ano: number;

    @Column({nullable: false})
    edicao: number;

    @Column({nullable: false})
    editora: string;

    @ManyToOne(() => Autor, autor => autor.livros)
    @JoinColumn({name: "id_autor"})
    @Column({nullable: false})
    fk_autor: string;

    constructor(){
        this.id_livro = uuid();
    }
}