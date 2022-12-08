
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './index';

interface uiState {
  modalIsOpen: boolean;
  dropdownMenuIsOpen: boolean;
}

const initialState: uiState = {
  modalIsOpen: false,
  dropdownMenuIsOpen: false
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
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

export const selectDropdown = (state: RootState) => state.ui

export default uiSlice.reducer;
