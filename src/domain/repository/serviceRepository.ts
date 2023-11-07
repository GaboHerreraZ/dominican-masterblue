import { Service } from "../model/service";

export interface ServiceRepository {
  findAll(): Promise<Service[]>;
  findById(id: string): Promise<Service | null>;
  create(service: Service): Promise<Service>;
  update(service: Service): Promise<Service | null>;
  delete(id: string): Promise<boolean>;
}
