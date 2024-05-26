import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useLeafInfo = create<{
  leafIndex: string;
  setLeafIndex: (secret: string) => void;
}>()(
  devtools(
    persist(
      (set) => ({
        leafIndex: "",
        setLeafIndex: (secret: string) =>
          set({
            leafIndex: secret,
          }),
      }),
      {
        name: "leaf-storage",
      }
    )
  )
);

export default useLeafInfo;
