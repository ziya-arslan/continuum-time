import create from "zustand";
import React from "react";

type TBeginButtonData = {
  begin: boolean;
  setBegin: (begin: boolean) => void;
};

export const useBegin = create<TBeginButtonData>((set) => ({
  begin: false,
  setBegin: (begin) => set((state) => ({ ...state, begin })),
}));
