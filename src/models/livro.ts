import { Column, Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid"
import { Autor } from "./autores";

@Entity("livros")
export class Livros {

    @PrimaryColumn()
    id_livro: string

    @Column({ nullable: false })
    livro: string

    @Column({ nullable: false })
    ano: number

    @Column({ nullable: false })
    edicao: number

    @Column({ nullable: false })
    editora: string

    @ManyToOne((type) => Autor, {
        createForeignKeyConstraints: false,
    })
    autor: Autor

    constructor(){
        this.id_livro = uuid()
    }
}