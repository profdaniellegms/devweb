import { Column, Entity, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid"
import { Autor } from "./autor";
import { Usuario } from "./usuario";

@Entity("emprestimos")
export class Emprestimo {

    @PrimaryColumn()
    id_emprestimo: string

    @Column({ nullable: false })
    data_emprestimo: Date

    @Column()
    data_devol_prevista: Date
    
    @Column()
    data_devol_efetiva: Date

    @Column()
    valor_multa: Date
   
    @ManyToOne((type) => Usuario, {
        createForeignKeyConstraints: false,
    })
    usuario: Usuario

    constructor(){
        this.id_emprestimo = uuid()
        this.ativo = true
    }

    @Column({ nullable: false })
    ativo: boolean
}