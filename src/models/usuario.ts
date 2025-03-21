import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"


@Entity("usuarios")
export class Usuario {

    @PrimaryColumn()
    id_usuario: String

    @Column({ nullable: false })
    nome_completo: String
    
    @Column({ nullable: false })
    email: String
    @Column({ nullable: false })
    telefone: String

    constructor(){
        this.id_usuario = uuid()
    }
}