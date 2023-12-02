import { Credential } from "@/domain/model/credential";
import { AuthRepository } from "@/domain/repository/authRepository";
import { auth } from "@/lib/firebase";
import {
  UserCredential,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export class AuthImplementationRepository implements AuthRepository {
  async loginWithEmailAndPassword(
    credentials: Credential
  ): Promise<UserCredential> {
    return signInWithEmailAndPassword(
      auth,
      credentials.email,
      credentials.password
    );
  }

  async logout(): Promise<void> {
    return signOut(auth);
  }
}
