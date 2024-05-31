import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const usePathStore = create<{
  path: string;
  setPath: (path: string) => void;
}>()(
  devtools(
    persist(
      (set) => ({
        path: "",
        setPath: (path: string) =>
          set({
            path,
          }),
      }),
      {
        name: "path-tx-storage",
      }
    )
  )
);

export default usePathStore;
