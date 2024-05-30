// hoopdreams

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const useUsernameStore = create<{
  username: string;
  setUsername: (username: string) => void;
}>()(
  devtools(
    persist(
      (set) => ({
        username: "",
        setUsername: (username: string) =>
          set({
            username,
          }),
      }),
      {
        name: "username-tx-storage",
      }
    )
  )
);

export default useUsernameStore;
