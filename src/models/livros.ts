import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Autores } from "./autores"; // Importando o modelo de Autores

@Entity("livros")
export class Livros {
	@PrimaryColumn()
	id_livro: string;

	@Column({ nullable: false })
	titulo: string;

	@Column({ nullable: false })
	ano: number;

	@Column({ nullable: false })
	edicao: number;

	@Column({ nullable: false })
	editora: string;

	@Column({ type: "boolean", default: true })
	ativo: boolean;

	// Relacionamento muitos para um com a tabela Autores
	@ManyToOne(
		() => Autores,
		(autor) => autor.livros,
	)
	@JoinColumn({ name: "autor_id" }) // Nome da coluna de chave estrangeira
	autor: Autores;

	constructor() {
		this.id_livro = uuid();
		this.ativo = true;
	}
}
