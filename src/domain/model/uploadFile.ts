import { UploadMetadata } from "firebase/storage";

export interface UploadFile {
  file: File;
  path: string;
  metadata: UploadMetadata;
}
