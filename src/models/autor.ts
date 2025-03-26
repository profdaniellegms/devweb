import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("autores")
export class Autor {

    @PrimaryColumn()
    id_autor: string

    @Column({ nullable: false })
    nome: string
    
    @Column({ nullable: false })
    nacionalidade: string

    constructor() {
        this.id_autor = uuid()
        this.ativo = true
    }

    @Column({ nullable: false })
    ativo: boolean
}