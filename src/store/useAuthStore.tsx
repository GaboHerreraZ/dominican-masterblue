import { AuthImplementationRepository } from "@/data/respository/auth/authImplementationRepository";
import { Credential } from "@/domain/model/credential";
import { SignInWithEmailAndPasswordUseCase } from "@/domain/useCase/auth/singInWithEmailAndPasswordUseCase";
import { SingOutUseCase } from "@/domain/useCase/auth/singOutUseCase";
import { FirebaseError } from "firebase/app";
import { create } from "zustand";

type State = {
  token: string;
  isAuth: boolean;
  errors: any;
};

type Actions = {
  signInWithEmailAndPassword: (credential: Credential) => Promise<any>;
  singOut: () => void;
};

export const useAuthStore = create<State & Actions>((set) => {
  const authImplementation = new AuthImplementationRepository();
  const signInWithEmailAndPasswordUseCase =
    new SignInWithEmailAndPasswordUseCase(authImplementation);

  const singOutUseCase = new SingOutUseCase(authImplementation);

  return {
    token: "null",
    isAuth: false,
    errors: null,
    signInWithEmailAndPassword: async (credential: Credential) => {
      try {
        const response = await signInWithEmailAndPasswordUseCase.execute(
          credential
        );
        set(() => ({
          token: response.user.accesToken,
          isAuth: true,
          error: null,
        }));
      } catch (error: FirebaseError | any) {
        set(() => ({ errors: error.code }));
      }
    },
    singOut: async () => {
      await singOutUseCase.execute();
      set(() => ({ isAuth: false }));
    },
  };
});
