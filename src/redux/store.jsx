//configuracion de redux
import { configureStore } from "@reduxjs/toolkit";
import climaReducer from './sliceClima'; //reducer

/* almacenamiento para guardar el estado entre recargas de página.*/
import storage from 'redux-persist/lib/storage';

/*persistReducer: combina la persistencia con nuestro reducer.
persistStore: crea un objeto especial que controla la rehidratación del estado.*/
import { persistReducer, persistStore } from "redux-persist";  

/*para agregar mas slices luego*/
import { combineReducers } from "@reduxjs/toolkit";

/*para que los actions puedan ser funciones asincronas*/
// import { thunk } from 'redux-thunk';

const persistConfig = {
    key: 'root',            //todo el estado estara bajo esa clave en el localStorage
    storage,                //usa localStorage para guardar
};

/*Reducer raiz: aqui se combinan los reducers de los slices. por ahora hay uno solo*/
const rootReducer = combineReducers({
    clima: climaReducer,
});

/*aplico persist al rootReducer asi el estado se guarda y se recupera al recargar*/
const persistedReducer = persistReducer(persistConfig, rootReducer);

/*creacion del store del redux, persistido y con el middleware*/
export const store = configureStore({
    reducer: persistedReducer,          //Reducers
    middleware: (getDefaultMiddleware) => //middleware
        getDefaultMiddleware({
          serializableCheck: false, // Necesario para redux-persist
        }),                
});

/*persistor para main, se asegura que react espere a que redux cargue el estado 
antes de renderizar la app*/
export const persistor = persistStore(store);