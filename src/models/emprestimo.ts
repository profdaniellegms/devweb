import { Column, Double, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid"
import { Usuario } from "./usuario";



@Entity("emprestimos")
export class Emprestimo{


    @PrimaryColumn()
    id_emprestimo: string

    @Column({ nullable: false })
    data_emprestimo: Date
    
    @Column({ nullable: false })
    data_devol_prevista: Date

    data_devol_efetiva: Date

    @Column({ nullable: false })
    valor_multa: Double
    
    @ManyToOne((type) => Usuario, {
        createForeignKeyConstraints: false

    })
    usuario: Usuario

    constructor(){
        this.id_emprestimo = uuid()
    }
}