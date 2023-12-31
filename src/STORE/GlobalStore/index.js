import { create } from "zustand";
const useGlobalStore = create((set) => ({
  photo: localStorage.getItem("photo"),
  user: localStorage.getItem("user")
    ? JSON.parse(atob(localStorage.getItem("user")))
    : null,
  token: localStorage.getItem("token"),
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
