import { getDownloadURL, listAll, ref } from "firebase/storage";
import { db, storage } from "./firebase";
import {
  doc,
  addDoc,
  Firestore,
  collection,
  query,
  getDocs,
  updateDoc,
  deleteDoc,
  DocumentReference,
  where,
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

  getDocumentsInstance = () => {
    return collection(this.dbSource, this.collectionName);
  };

  getDocument = (slug: string) => {
    const ref = collection(this.dbSource, this.collectionName);
    return getDocs(query(ref, where("slug", "==", slug)));
  };

  updateDocument = (params: Partial<T>, id: string) => {
    const item = Object.assign({}, params);
    const ref = doc(this.dbSource, this.collectionName, id);
    return updateDoc(ref, { ...item });
  };

  deleteDocument = (id: string) => {
    const docRef = doc(this.dbSource, this.collectionName, id);
    return deleteDoc(docRef);
  };

  getImagesById = async (id: string) => {
    const listRef = ref(storage, `products/${id}`);
    const list = await listAll(listRef);

    const promises: Promise<string>[] = [];
    const names: { name: string }[] = [];
    list.items.map((file) => {
      names.push({ name: file.name });
      promises.push(getDownloadURL(file));
    });

    const urlImages = await Promise.all(promises);

    const images = names.map((name, index) =>
      Object.assign({}, name, { url: urlImages[index] })
    );

    return images;
  };
}
