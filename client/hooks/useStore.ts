import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

// !!!! NEVER USE PLAINTEXT SECRET STORAGE THIS IN PRODUCTION,
// THIS IS JUST FOR DEMO PURPOSES !!!
const useStore = create<{
  userSecret: string;
  setUserSecret: (secret: string) => void;
}>()(
  devtools(
    persist(
      (set) => ({
        userSecret: "",
        setUserSecret: (secret: string) =>
          set({
            userSecret: secret,
          }),
      }),
      {
        name: "secret-storage",
      }
    )
  )
);

export default useStore;
