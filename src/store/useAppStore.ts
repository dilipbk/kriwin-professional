import { create } from "zustand";
import type { Theme } from "../types";

interface AppState {
  theme: Theme;
  isLoading: boolean;
  activeService: string | null;
  setTheme: (theme: Theme) => void;
  setLoading: (loading: boolean) => void;
  setActiveService: (serviceId: string | null) => void;
}

export const useAppStore = create<AppState>(set => ({
  theme: "system",
  isLoading: false,
  activeService: null,
  setTheme: theme => set({ theme }),
  setLoading: isLoading => set({ isLoading }),
  setActiveService: activeService => set({ activeService }),
}));
