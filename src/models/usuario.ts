import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Emprestimo } from "./emprestimos"; // Importando o modelo de Emprestimos

@Entity("usuarios")
export class Usuario {
	@PrimaryColumn()
	id_usuario: string;

	@Column({ nullable: false })
	nome_completo: string;

	@Column({ nullable: false })
	email: string;

	@Column({ nullable: false })
	telefone: string;

	@Column({ type: "boolean", default: true })
	ativo: boolean;

	// Relacionamento um para muitos com a tabela Emprestimos
	@OneToMany(
		() => Emprestimo,
		(emprestimo) => emprestimo.usuario,
	)
	emprestimos: Emprestimo[];

	constructor() {
		this.id_usuario = uuid();
		this.ativo = true;
	}
}
