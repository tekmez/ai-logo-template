import { create } from "zustand";

interface LogoStore {
  selectedStyle: string;
  setSelectedStyle: (selectedStyle: string) => void;
  logoUrl: string | null;
  setLogoUrl: (logoUrl: string | null) => void;
  logoId: string | null;
  setLogoId: (logoId: string | null) => void;
  prompt: string;
  setPrompt: (prompt: string) => void;
  clearLogo: () => void;
}

interface StateChipStore {
  state: "loading" | "success" | "error" | null;
  setState: (state: "loading" | "success" | "error" | null) => void;
}

const useLogoStore = create<LogoStore>((set) => ({
  selectedStyle: "No Style",
  setSelectedStyle: (selectedStyle) => set({ selectedStyle }),
  logoUrl: null,
  setLogoUrl: (logoUrl) => set({ logoUrl }),
  logoId: null,
  setLogoId: (logoId) => set({ logoId }),
  prompt: "",
  setPrompt: (prompt) => set({ prompt }),
  clearLogo: () => set({ logoUrl: null, logoId: null, prompt: "" }),
}));

const useStateChipStore = create<StateChipStore>((set) => ({
  state: null,
  setState: (state) => set({ state }),
}));

export { useLogoStore, useStateChipStore };
