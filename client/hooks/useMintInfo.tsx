import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useMintInfo = create<{
  mintTx: string;
  setMintTx: (secret: string) => void;
}>()(
  devtools(
    persist(
      (set) => ({
        mintTx: "",
        setMintTx: (secret: string) =>
          set({
            mintTx: secret,
          }),
      }),
      {
        name: "mint-tx-storage",
      }
    )
  )
);

export default useMintInfo;
