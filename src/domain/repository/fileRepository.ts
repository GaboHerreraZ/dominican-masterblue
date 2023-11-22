import { UploadMetadata, UploadTask } from "firebase/storage";

export abstract class FileRepository {
  abstract uploadFile(
    file: File,
    path: string,
    metadata: UploadMetadata
  ): UploadTask;
}
