import { httpsCallable } from "firebase/functions";
import { functions } from "@/firebaseConfig";
import { Logo } from "@/types/logo";

export const useLogoService = () => {
  // Cloud Functions referansları
  const addLogoFunction = httpsCallable<
    Omit<Logo, "id">,
    { success: boolean; id: string }
  >(functions, "addLogo");

  const getLogoFunction = httpsCallable<{ id: string }, Logo | null>(
    functions,
    "getLogo"
  );

  const updateLogoFunction = httpsCallable<
    { id: string; logoData: Partial<Omit<Logo, "id">> },
    { success: boolean }
  >(functions, "updateLogo");

  const deleteLogoFunction = httpsCallable<
    { id: string },
    { success: boolean }
  >(functions, "deleteLogo");

  const getAllLogosFunction = httpsCallable<
    void,
    { success: boolean; logos: Logo[] }
  >(functions, "getAllLogos");

  const generateLogoFunction = httpsCallable<
    { prompt: string },
    { success: boolean; logoUrl: string }
  >(functions, "generateLogo");

  // Logo ekle
  const addLogo = async (
    logoData: Omit<Logo, "id">
  ): Promise<string | undefined> => {
    try {
      const response = await addLogoFunction(logoData);
      return response.data.id;
    } catch (error) {
      console.error("Add logo failed", error);
      return undefined;
    }
  };

  // Logo getir
  const getLogo = async (id: string): Promise<Logo | null> => {
    try {
      const response = await getLogoFunction({ id });
      return response.data;
    } catch (error) {
      console.error("Fetch logo failed", error);
      return null;
    }
  };

  // Logo güncelle
  const updateLogo = async (
    id: string,
    logoData: Partial<Omit<Logo, "id">>
  ): Promise<boolean> => {
    try {
      const response = await updateLogoFunction({ id, logoData });
      return response.data.success;
    } catch (error) {
      console.error("Update logo failed", error);
      return false;
    }
  };

  // Logo sil
  const deleteLogo = async (id: string): Promise<boolean> => {
    try {
      const response = await deleteLogoFunction({ id });
      return response.data.success;
    } catch (error) {
      console.error("Delete logo failed", error);
      return false;
    }
  };

  // Tüm logoları getir
  const getAllLogos = async (): Promise<Logo[]> => {
    try {
      const response = await getAllLogosFunction();
      return response.data.logos;
    } catch (error) {
      console.error("Fetch all logos failed", error);
      return [];
    }
  };

  const generateLogo = async (prompt: string): Promise<string | undefined> => {
    try {
      const response = await generateLogoFunction({ prompt });
      return response.data.logoUrl;
    } catch (error) {
      console.error("Generate logo failed", error);
      return undefined;
    }
  };
  return {
    addLogo,
    getLogo,
    updateLogo,
    deleteLogo,
    getAllLogos,
    generateLogo,
  };
};
