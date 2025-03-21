import { Column, Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid"
import { Usuario } from "./usuario";

@Entity("emprestimo")
export class Emprestimo {

    @PrimaryColumn()
    id_emprestimo: string

    @Column({ nullable: false })
    data_emprestimo: Date

    @Column({ nullable: true })
    data_devol_prevista: Date

    @Column({ nullable: true })
    data_devol_efetiva: Date

    @Column({ nullable: true })
    valor_multa: number

    @ManyToOne((type) => Usuario, {
        createForeignKeyConstraints: false,
    })
    usuario: Usuario

    constructor(){
        this.id_emprestimo = uuid()
    }
}