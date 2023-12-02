import { Credential } from "@/domain/model/credential";
import { UserCredential } from "firebase/auth";

export abstract class AuthRepository {
  abstract loginWithEmailAndPassword(
    credentials: Credential
  ): Promise<UserCredential>;
  abstract logout(): Promise<void>;
}
