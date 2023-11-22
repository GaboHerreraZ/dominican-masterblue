import { UseCase } from "@/base/useCase";
import { Credential } from "@/domain/model/credential";
import { AuthRepository } from "@/domain/repository/authRepository";

export class SignInWithEmailAndPasswordUseCase
  implements UseCase<Credential, any>
{
  constructor(private repository: AuthRepository) {
    this.repository = repository;
  }

  execute(credentials: Credential): Promise<any> {
    return this.repository.loginWithEmailAndPassword(credentials);
  }
}
