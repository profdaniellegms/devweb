import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"

@Entity("usuarios")
export class Usuario {

    @PrimaryColumn()
    id_usuario: string

    @Column({ nullable: false })
    nome_completo: string
    
    @Column({ nullable: false })
    email: string

    @Column({ nullable: false })
    telefone: string

    @Column({ type: "boolean", default: true })
    ativo: boolean;

    constructor(){
        this.id_usuario = uuid()
        this.ativo = true;
    }
}