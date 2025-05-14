import { onCall, HttpsError } from "firebase-functions/v2/https";
import * as logoService from "../services/logoService";

// Add Logo Controller
export const addLogo = onCall(
  {
    cors: true,
    maxInstances: 10,
  },
  async (request) => {
    try {
      const logoData = request.data;

      if (
        !logoData ||
        !logoData.logoUrl ||
        !logoData.prompt ||
        !logoData.style
      ) {
        throw new HttpsError("invalid-argument", "Invalid logo data");
      }

      const createdAt = new Date();
      const result = await logoService.addLogo({
        ...logoData,
        createdAt,
      });

      return { success: true, id: result };
    } catch (error) {
      throw new HttpsError("internal", "Error adding logo", error);
    }
  }
);

// Get Logo Controller
export const getLogo = onCall(
  {
    cors: true,
    maxInstances: 10,
  },
  async (request) => {
    try {
      const { id } = request.data;

      if (!id) {
        throw new HttpsError("invalid-argument", "Logo ID is required");
      }

      const logo = await logoService.getLogo(id);

      if (!logo) {
        throw new HttpsError("not-found", "Logo not found");
      }

      return { success: true, logo };
    } catch (error) {
      throw new HttpsError("internal", "Error fetching logo", error);
    }
  }
);

// Update Logo Controller
export const updateLogo = onCall(
  {
    cors: true,
    maxInstances: 10,
  },
  async (request) => {
    try {
      const { id, logoData } = request.data;

      if (!id || !logoData) {
        throw new HttpsError(
          "invalid-argument",
          "Logo ID and data to update are required"
        );
      }

      const success = await logoService.updateLogo(id, logoData);

      if (!success) {
        throw new HttpsError("not-found", "Logo to update not found");
      }

      return { success: true };
    } catch (error) {
      throw new HttpsError("internal", "Error updating logo", error);
    }
  }
);

// Delete Logo Controller
export const deleteLogo = onCall(
  {
    cors: true,
    maxInstances: 10,
  },
  async (request) => {
    try {
      const { id } = request.data;

      if (!id) {
        throw new HttpsError("invalid-argument", "Logo ID is required");
      }

      const success = await logoService.deleteLogo(id);

      if (!success) {
        throw new HttpsError("not-found", "Logo to delete not found");
      }

      return { success: true };
    } catch (error) {
      throw new HttpsError("internal", "Error deleting logo", error);
    }
  }
);

// Get All Logos Controller
export const getAllLogos = onCall(
  {
    cors: true,
    maxInstances: 10,
  },
  async () => {
    try {
      const logos = await logoService.getAllLogos();
      return { success: true, logos };
    } catch (error) {
      throw new HttpsError("internal", "Error fetching all logos", error);
    }
  }
);
