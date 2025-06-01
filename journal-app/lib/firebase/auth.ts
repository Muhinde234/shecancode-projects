import { auth } from "./config";
import { 
  signInWithEmailAndPassword, 
  signOut, 
  UserCredential, 
  User 
} from "firebase/auth";

export const loginUser = async (
  email: string, 
  password: string
): Promise<UserCredential> => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = async (): Promise<void> => {
  return signOut(auth);
};

export const getCurrentUser = (): User | null => {
  return auth.currentUser;
};