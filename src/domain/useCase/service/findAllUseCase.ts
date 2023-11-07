import { UseCase } from "@/base/useCase";
import { Service } from "@/domain/model/service";
import { ServiceRepository } from "@/domain/repository/serviceRepository";

export class FindAllUseCase implements UseCase<void, Service[]> {
  constructor(private repository: ServiceRepository) {
    this.repository = repository;
  }

  execute(): Promise<Service[]> {
    return this.repository.findAll();
  }
}
