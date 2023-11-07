import { UseCase } from "@/base/useCase";
import { Service } from "@/domain/model/service";
import { ServiceRepository } from "@/domain/repository/serviceRepository";

export class FindByIdUseCase implements UseCase<string, Service | null> {
  constructor(private repository: ServiceRepository) {
    this.repository = repository;
  }

  execute(id: string): Promise<Service | null> {
    return this.repository.findById(id);
  }
}
