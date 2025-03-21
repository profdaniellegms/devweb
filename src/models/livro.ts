import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Autor } from "./autor";

@Entity("livros")
export class Livro{

    @PrimaryColumn()
    id_livro: string

    @Column({ nullable: false })
    titulo: string
    
    @Column({ nullable: false })
    ano: Date

    @Column({ nullable: false })
    edicao: string

    @Column({ nullable: false })
    editora: string

    @ManyToOne(() => Autor, autor => autor.livros)  //Relacionamento 
    @JoinColumn({ name: "fk_autor" })  //chave estrangeira
    autor: Autor;

    constructor(){
        this.id_livro = uuid()
    }
}