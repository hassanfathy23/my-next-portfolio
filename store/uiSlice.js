import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modalIsOpen: false,
    dropdownMenuIsOpen : false
  },
  reducers: {
    openModal: (state) => {
      state.modalIsOpen = !state.modalIsOpen;
    },
    openDropdownMenu: (state) => {
      state.dropdownMenuIsOpen = !state.dropdownMenuIsOpen
    },
  },
});

export const { openModal, openDropdownMenu } = uiSlice.actions;

export default uiSlice.reducer;
