import { UseCase } from "@/base/useCase";
import { UploadFile } from "@/domain/model/uploadFile";
import { FileRepository } from "@/domain/repository/fileRepository";
import { UploadTask } from "firebase/storage";

export class UploadImageProductUseCase
  implements UseCase<UploadFile, UploadTask>
{
  constructor(private fileRepository: FileRepository) {
    this.fileRepository = fileRepository;
  }

  execute(uploadFile: UploadFile): UploadTask {
    return this.fileRepository.uploadFile(
      uploadFile.file,
      uploadFile.path,
      uploadFile.metadata
    );
  }
}
