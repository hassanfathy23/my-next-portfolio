import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    modalIsOpen: false,
    dropdownMenuIsOpen : false
  },
  reducers: {
    openModal: (state) => {
      state.modalIsOpen = true;
    },
    closeModal: state => {
      state.modalIsOpen = false
    },
    openDropdownMenu: (state) => {
      state.dropdownMenuIsOpen = true
    },
    closeDropdownMenu: state => {
      state.dropdownMenuIsOpen = false
    },
  },
});

export const { openModal, closeModal, openDropdownMenu, closeDropdownMenu } = uiSlice.actions;

export default uiSlice.reducer;
