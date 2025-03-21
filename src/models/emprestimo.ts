import { Column, Double, Entity, JoinColumn, OneToMany, PrimaryColumn } from "typeorm"
import {v4 as uuid} from "uuid"
import { Usuario } from "./usuario"

@Entity("emprestimos")
export class Emprestimo{
    @PrimaryColumn()
    id_emprestimo: String

    @Column({ nullable: false})
    data_emprestimo: Date

    @Column({ nullable: false})
    data_devol_prevista: Date

    @Column({ nullable: false})
    data_devol_efetiva: Date

    @Column({ nullable: false})
    valor_multa: number

   @OneToMany(() => Emprestimo, emprestimo => emprestimo.usuario)
   usuario:Usuario;

    constructor(){
        this.id_emprestimo = uuid()
    }
}