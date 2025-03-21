import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Autor } from "./autor";
import{v4 as uuid} from "uuid"

@Entity("livros")
export class Livro{
    @PrimaryColumn()
    id_livro:string

    @Column({ nullable: false})
    titulo: string

    @Column({ nullable: false})
    ano: number

    @Column({ nullable: false})
    edicao: number

    @Column({ nullable: false})
    editora: string

    @ManyToOne(() => Livro, livro => livro.autor)
    @JoinColumn({name:"fk_autor"})
    autor:Autor

    constructor(){
        this.id_livro = uuid()
    }


}