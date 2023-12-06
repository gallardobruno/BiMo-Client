import { createSlice } from '@reduxjs/toolkit';

export const formularioSlice = createSlice({
  name: 'formulario',
  initialState: {
    inputValues: {},
  },
  reducers: {
    actualizarDatos: (state, action) => {
      state.inputValues = { ...state.inputValues, ...action.payload };
    },
  },
});

export const {actualizarDatos} = formularioSlice.actions;


