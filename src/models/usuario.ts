import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Emprestimos } from "./emprestimos";

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

    @OneToMany(()=>Emprestimos, emp => emp.fk_usuario)
    emprestimos: Emprestimos[]

    constructor(){
        this.id_usuario = uuid()
    }
}