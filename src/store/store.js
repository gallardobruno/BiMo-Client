import { configureStore } from "@reduxjs/toolkit";
import { origenSlice } from './misSlice';
import { formularioSlice } from "./landingSlice";


export default configureStore({
    reducer:{
        unValor:origenSlice.reducer,
        formulario: formularioSlice.reducer,
        //si tengo mas los pongo aca
    }
})