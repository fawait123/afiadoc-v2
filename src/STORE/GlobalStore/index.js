import { create } from "zustand";
import Cookie from "js-cookie";
const useGlobalStore = create((set) => ({
  photo: localStorage.getItem("photo"),
  user: Cookie.get("user") ? JSON.parse(atob(Cookie.get("user"))) : null,
  token: Cookie.get("token"),
  loadingBtn: false,
  loadingTable: false,
  setLoadingBtn: (state) => set(() => ({ loadingBtn: state })),
  setPhoto: (state) => set(() => ({ photo: state })),
  setLoadingTable: (state) =>
    set(() => {
      return { loadingTable: state };
    }),
}));

export default useGlobalStore;
