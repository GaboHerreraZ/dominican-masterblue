import { UseCase } from "@/base/useCase";
import { Credential } from "@/domain/model/credential";
import { AuthRepository } from "@/domain/repository/authRepository";
import { UserCredential } from "firebase/auth";

export class SignInWithEmailAndPasswordUseCase
  implements UseCase<Credential, UserCredential>
{
  constructor(private repository: AuthRepository) {
    this.repository = repository;
  }

  execute(credentials: Credential): Promise<UserCredential> {
    return this.repository.loginWithEmailAndPassword(credentials);
  }
}
