import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modalIsOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    },
  },
});

export const { openModal } = uiSlice.actions;

export default uiSlice.reducer;
