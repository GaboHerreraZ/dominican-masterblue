import { UseCase } from "@/base/useCase";
import { Service } from "@/domain/model/service";
import { ServiceRepository } from "@/domain/repository/serviceRepository";

export class UpdateUseCase implements UseCase<Service, Service | null> {
  constructor(private repository: ServiceRepository) {
    this.repository = repository;
  }

  execute(service: Service): Promise<Service | null> {
    return this.repository.update(service);
  }
}
