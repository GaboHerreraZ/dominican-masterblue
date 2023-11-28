import { Credential } from "@/domain/model/credential";
import { AuthRepository } from "@/domain/repository/authRepository";
import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export class AuthImplementationRepository implements AuthRepository {
  async loginWithEmailAndPassword(credentials: Credential): Promise<any> {
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
