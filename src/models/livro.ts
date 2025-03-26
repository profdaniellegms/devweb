import { Column, Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Autor } from "./autor";

@Entity("livros")
export class Livro {

    @PrimaryColumn()
    id_livro: string;

    @Column({ nullable: false })
    titulo: string;
    
    @Column({ nullable: false })
    ano: string;

    @Column({ nullable: false })
    edicao: string;

    @Column({ nullable: false })
    editora: string;

    @ManyToOne(() => Autor, {
        createForeignKeyConstraints: false,
    })
    autor: Autor;

    @Column({ default: true }) 
    ativo: boolean;

    constructor(){
        this.id_livro = uuid();
        this.ativo = true;
    }
}
