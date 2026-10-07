import { create } from "zustand";

type UIState = {
  snow: boolean;
  toggleSnow: () => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export const useUI = create<UIState>((set) => ({
  snow: true,
  toggleSnow: () => set((s) => ({ snow: !s.snow })),
  menuOpen: false,
  setMenuOpen: (menuOpen) => set({ menuOpen }),
}));
