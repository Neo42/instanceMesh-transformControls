import create from "zustand";

/** @type {*} */
const useStore = create((set) => ({
  target: null,
  setTarget: (target) => set({ target })
}));

export default useStore;
