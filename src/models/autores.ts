import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Livros } from "./livros"; // Importando o modelo de Livros

@Entity("autores")
export class Autores {
	@PrimaryColumn()
	id_autor: string;

	@Column({ nullable: false })
	nome: string;

	@Column({ nullable: false })
	nacionalidade: string;

	// Relacionamento um para muitos com a tabela Livros
	@OneToMany(
		() => Livros,
		(livro) => livro.autor,
	)
	livros: Livros[];

	constructor() {
		this.id_autor = uuid();
	}
}
