import { UseCase } from "@/base/useCase";

export class DeleteProductUseCase implements UseCase<string, boolean> {
  constructor(private repository: any) {
    this.repository = repository;
  }

  execute(id: string): Promise<boolean> {
    return this.repository.delete(id);
  }
}
