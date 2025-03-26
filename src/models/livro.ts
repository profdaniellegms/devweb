import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Autor } from "./autor";
import { Emprestimo } from "./emprestimo";

@Entity("livros")
export class Livro {
  @PrimaryColumn()
  @ManyToMany(() => Emprestimo)
  id_livro: string;

  @Column({ nullable: false })
  titulo: string;

  @Column({ nullable: false })
  ano: number;

  @Column({ nullable: false })
  edicao: number;

  @Column({ nullable: false })
  editora: string;

  @ManyToOne(() => Autor)
  @JoinColumn({ name: "id_autor" })
  @Column({ nullable: false })
  fk_autor: string;

  @Column({ nullable: false })
  ativo: boolean;

  constructor() {
    this.id_livro = uuid();
    this.ativo = true;
  }
}
