import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("autor")
export class Autor {

    @PrimaryColumn()
    id_autor: string

    @Column({ nullable: false })
    nome: string
    
    @Column({ nullable: true })
    nacionalidade: string

    constructor(){
        this.id_autor = uuid()
    }
}
