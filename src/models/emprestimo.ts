import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Livro } from "./livro";
import { Usuario } from "./usuario";

@Entity("emprestimos")
export class Emprestimo {
  @PrimaryColumn()
  @ManyToMany(() => Livro)
  id_emprestimo: string;

  @Column({ nullable: false })
  data_emprestimo: string;

  @Column({ nullable: false })
  data_devol_prevista: string;

  @Column({ nullable: false })
  data_devol_efetiva: string;

  @Column({ nullable: false })
  valor_multa: number;

  @ManyToOne(() => Usuario)
  @JoinColumn({ name: "id_usuario" })
  @Column({ nullable: false })
  fk_autor: string;

  constructor() {
    this.id_emprestimo = uuid();
  }
}
