import { response } from "express";
import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
	name: string;
	email: string;
}

class CreateUserUseCase {
	constructor(private usersRepository: IUsersRepository) {}

	execute({ email, name }: IRequest): User {
		const userAlreadyExists = this.usersRepository.findByEmail(email);
		if (userAlreadyExists) {
			throw new Error("usuario já existe");
		}
		this.usersRepository.create({ email, name });

		return this.usersRepository.findByEmail(email);
	}
}

export { CreateUserUseCase };
