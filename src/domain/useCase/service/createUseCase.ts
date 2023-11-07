import { UseCase } from "@/base/useCase";
import { Service } from "@/domain/model/service";
import { ServiceRepository } from "@/domain/repository/serviceRepository";

export class CreateServiceUseCase implements UseCase<Service, Service> {
  constructor(private repository: ServiceRepository) {
    this.repository = repository;
  }

  execute(service: Service): Promise<Service> {
    return this.repository.create(service);
  }
}
