/* este slice representa el estado relacionado con el clima extendido*/

import { createSlice } from "@reduxjs/toolkit";

/*Estado inicial, null xq no hay clima seleccionado*/
const initialState = {
    climaExtendido: null,
};

/*Creacion del slice con la funcion createSlice a la que le pasamos un obj con 3 cosas
    - name: nombre del slice
    - initialState: estado inicial previamente definido
    - reducers: contiene la funcion que atualizara el estado
        - accion: tenerClimaExtendido(state, action)
            - state: estado actual del slice
            - action.payload: datos nuevos del clima que guardaremos
            - fecha de guardado: fecha en la que guardamos los datos del clima
*/
const climaSlice = createSlice({
    name: 'clima',                          
    initialState,                          
    reducers:{                              
        tenerClimaExtendido(state, action){  
            state.climaExtendido = {
                ...action.payload,          
                fecha: new Date().toISOString(),
            };
        },
    },
});
/*accion generada x createSlice para que dispatch la use*/
export const {climaExtendido} = climaSlice.actions; 
/*reducer para usarlo en store.js*/
export default climaSlice.reducer;