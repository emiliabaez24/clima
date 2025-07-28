// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import './index.css'
/*React y ReactDOM para renderizar */
import React from 'react';
import ReactDOM from 'react-dom/client';

/*Componente principal*/
import App from './App.jsx'

/*Redux*/
import { Provider } from 'react-redux'; //--> para que todos los componentes accedan al store
import {store, persistor} from './redux/store' //-->estado global, objeto que maneja la persistencia
//retrasa el renderizado hasta que el estado guardado en localstorage este cargado
import { PersistGate } from 'redux-persist/integration/react'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

