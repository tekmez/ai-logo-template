import * as admin from "firebase-admin";
import { logger } from "firebase-functions";

// Logo tipi tanımı - istemci tarafıyla uyumlu
interface Logo {
  id: string;
  logoUrl: string;
  prompt: string;
  style: string;
  createdAt: Date;
}

// Firestore referansını al
const getLogoCollection = () => {
  return admin.firestore().collection("logos");
};

// Add Logo to Firestore
export const addLogo = async (
  logoData: Omit<Logo, "id">
): Promise<string | undefined> => {
  try {
    const docRef = getLogoCollection().doc();
    const newLogo = {
      ...logoData,
      id: docRef.id,
    };

    await docRef.set(newLogo);
    logger.info("Added successfully logo, id:", docRef.id);
    return docRef.id;
  } catch (error) {
    logger.error("Error adding logo:", error);
    throw new Error("Error adding logo");
  }
};

// Get Logo from Firestore
export const getLogo = async (id: string): Promise<Logo | null> => {
  try {
    const docRef = getLogoCollection().doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      logger.info("Logo not found, id:", id);
      return null;
    }

    return { ...doc.data(), id: doc.id } as Logo;
  } catch (error) {
    logger.error("Error getting logo:", error);
    throw new Error("Error getting logo");
  }
};

// Update Logo in Firestore
export const updateLogo = async (
  id: string,
  logoData: Partial<Omit<Logo, "id">>
): Promise<boolean> => {
  try {
    const docRef = getLogoCollection().doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      logger.warn("Logo not found, id:", id);
      return false;
    }

    await docRef.update(logoData);
    logger.info("Updated successfully logo, id:", id);
    return true;
  } catch (error) {
    logger.error("Error updating logo:", error);
    throw new Error("Error updating logo");
  }
};

// Delete Logo from Firestore
export const deleteLogo = async (id: string): Promise<boolean> => {
  try {
    const docRef = getLogoCollection().doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
      logger.warn("Logo not found, id:", id);
      return false;
    }

    await docRef.delete();
    logger.info("Deleted successfully logo, id:", id);
    return true;
  } catch (error) {
    logger.error("Error deleting logo:", error);
    throw new Error("Error deleting logo");
  }
};

// Get All Logos from Firestore
export const getAllLogos = async (): Promise<Logo[]> => {
  try {
    const snapshot = await getLogoCollection().get();
    const logos = snapshot.docs.map(
      (doc) => ({ ...doc.data(), id: doc.id } as Logo)
    );

    logger.info(`${logos.length} logos fetched successfully`);
    return logos;
  } catch (error) {
    logger.error("Error fetching all logos:", error);
    throw new Error("Error fetching all logos");
  }
};
