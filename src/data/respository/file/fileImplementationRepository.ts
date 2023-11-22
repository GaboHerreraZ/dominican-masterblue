import { FileRepository } from "@/domain/repository/fileRepository";
import { storage } from "@/firebase";
import {
  FirebaseStorage,
  StorageReference,
  UploadMetadata,
  UploadTask,
  ref,
  uploadBytesResumable,
} from "firebase/storage";

export class FileImplementationRepository implements FileRepository {
  private stg: FirebaseStorage;

  constructor() {
    this.stg = storage;
  }

  uploadFile(file: File, path: string, metadata: UploadMetadata): UploadTask {
    const refStorage = ref(this.stg, path);
    return uploadBytesResumable(refStorage, file, metadata);
  }
}
