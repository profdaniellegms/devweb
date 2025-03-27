import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Emprestimo } from "./emprestimo";

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

    @Column({ nullable: false})
    ativo: boolean
    
    @OneToMany(() => Emprestimo, emp => emp.fk_usuario)
    emprestimos: Emprestimo[];

    constructor(){
        this.id_usuario = uuid()
        this.ativo = true
    }
}