import { db } from "@/firebase";
import {
  doc,
  addDoc,
  Firestore,
  collection,
  query,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  DocumentReference,
} from "firebase/firestore";

export class Db<T> {
  private dbSource: Firestore;

  constructor(private collectionName: string) {
    this.dbSource = db;
  }

  addDocument = (params: T): Promise<DocumentReference> => {
    const item = Object.assign({}, params);
    const dbInstance = collection(this.dbSource, this.collectionName);
    return addDoc(dbInstance, item);
  };

  getDocuments = () => {
    const dbInstance = collection(this.dbSource, this.collectionName);
    const q = query(dbInstance);
    return getDocs(q);
  };

  getDocument = (id: string) => {
    const ref = doc(this.dbSource, this.collectionName, id);
    return getDoc(ref);
  };

  updateDocument = (params: T, id: string) => {
    const item = Object.assign({}, params);
    const ref = doc(this.dbSource, this.collectionName, id);
    return updateDoc(ref, { ...item });
  };

  deleteDocument = (id: string) => {
    const docRef = doc(this.dbSource, this.collectionName, id);
    return deleteDoc(docRef);
  };
}
