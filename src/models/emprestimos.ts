import { Column, Double, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { Usuario } from "./usuario";

@Entity("emprestimo")
export class Emprestimos {

    @PrimaryColumn()
    id_emprestimo: number

    @Column({ nullable: false })
    data_emprestimo: Date
    
    @Column({ nullable: false })
    data_devol_prevista: Date

    @Column({ nullable: false })
    valor_multa: Double

    @ManyToOne(()=> Usuario, usuario => usuario.emprestimos)
    @JoinColumn({name :"id_usuario"})
    @Column({ nullable: false })
    fk_usuario: number
}