import { UseCase } from "@/base/useCase";
import { AuthRepository } from "@/domain/repository/authRepository";

export class SingOutUseCase implements UseCase<any, any> {
  constructor(private repository: AuthRepository) {
    this.repository = repository;
  }

  execute(): Promise<any> {
    return this.repository.logout();
  }
}
