import { storage } from '../firebase/firebase';

export const firebaseUpload = async (file) => {
  let newFilename = `${file.name}-${Date.now()}`
  await storage.ref(`images/${newFilename}`).put(file);

  return await storage.ref(`images/${newFilename}`).getDownloadURL();
};
