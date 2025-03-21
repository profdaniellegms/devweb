import { Column, Entity, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Usuario } from "./usuario"; // Supondo que a tabela de usuários esteja em outro arquivo

@Entity("emprestimos")
export class Emprestimo {
	@PrimaryColumn()
	id_emprestimo: string;

	@Column({ nullable: false })
	data_emprestimo: string;

	@Column({ nullable: false })
	data_devol_prevista: string;

	@Column({ nullable: false })
	data_devol_efetiva: string;

	@Column({ nullable: false })
	valor_multa: string;

	// Relacionamento muitos para um com a tabela Usuarios
	@ManyToOne(
		() => Usuario,
		(usuario) => usuario.emprestimos,
	)
	@JoinColumn({ name: "usuario_id" }) // Nome da coluna de chave estrangeira
	usuario: Usuario;

	constructor() {
		this.id_emprestimo = uuid();
	}
}
