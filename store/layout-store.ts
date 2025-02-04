import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface resumeLayout {
  layout: "modern" | "classic" | "minimal";
  hasHydrate: boolean;
  setLayout: (value: "modern" | "classic" | "minimal") => void;
  setHasHydrated: (value: boolean) => void;
}

export const useLayoutStore = create<resumeLayout>()(
  persist(
    (set) => ({
      layout: "modern",
      hasHydrate: false,
      setLayout: (value) => set({ layout: value }),
      setHasHydrated: (value) => set({ hasHydrate: value }),
    }),
    {
      name: "cv-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    }
  )
);
