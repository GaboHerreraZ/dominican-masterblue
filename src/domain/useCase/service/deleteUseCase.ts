import { UseCase } from "@/base/useCase";
import { ServiceRepository } from "@/domain/repository/serviceRepository";

export class DeleteUseCase implements UseCase<string, boolean> {
  constructor(private repository: ServiceRepository) {
    this.repository = repository;
  }

  execute(id: string): Promise<boolean> {
    return this.repository.delete(id);
  }
}
