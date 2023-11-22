import { Credential } from "@/domain/model/credential";

export abstract class AuthRepository {
  abstract loginWithEmailAndPassword(credentials: Credential): Promise<any>;
  abstract logout(): Promise<void>;
}
