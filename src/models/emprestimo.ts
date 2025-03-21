import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Usuario } from "./usuario";

@Entity("emprestimos")
export class Emprestimo {
    @PrimaryColumn()
    id_emprestimo: string;

    @Column({nullable: false})
    data_emprestimo: Date;

    @Column()
    data_devol_prevista: Date;

    @Column()
    data_devol_efetiva: Date;

    @Column()
    valor_multa: number;

    @ManyToOne(() => Usuario, usuario => usuario.emprestimos)
    @JoinColumn({name: "id_usuario"})
    @Column({nullable: false})
    fk_usuario: string;
}