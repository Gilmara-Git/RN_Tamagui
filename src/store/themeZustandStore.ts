import { create } from "zustand";
import { useState } from "react";

type ThemeColorType = {
  isDarkTheme: boolean;
};

const initialState: ThemeColorType = {
  isDarkTheme: false,
};

type Actions = {
  updateTheme: () => void;
};

export const useThemeStore = create<ThemeColorType & Actions>((set) => ({
  ...initialState,
  updateTheme: () => {
    set((state) => ({ isDarkTheme: !state.isDarkTheme }));
  },
}));
