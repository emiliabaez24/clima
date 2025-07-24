
# Documentacion del proceso de desarrollo
Proyecto creado con el objetivo de profundizar en el desarrollo frontend utilizando **React**. Se abordan conceptos clave como **hooks**, **componentes de orden superior**, **gestión del estado**, y **herramientas como Redux Toolkit**.

### Objetivo
El objetivo es crear una aplicacion frontend con dos pantallas, que utilice Redux para manejar el estado global y mostrar un clima extendido persistido en el estado.
La aplicacion debe incluir una funcionalidad de contador y la visualizacion de pronosticos de clima de 6 paises al menos usando una API externa.

## 1. Requerimientos funcionales
### Pantalla 1:
- Botón con el texto "Ir a pantalla dos", que debe redirigir a la segunda pantalla cuando se hace clic.
- Si se intenta acceder a una ruta que no existe, la aplicación debe redirigir automáticamente a la pantalla uno.
- Si se ha seleccionado un clima extendido previamente en la pantalla dos y se recarga la página, el clima debe ser mostrado con la fecha de cuando se guardó. (Para lograr esto, se utilizará **Redux Persist** para mantener el estado global tras recargar la página).
### Pantalla 2:
- Un **contador** con dos botones (sumar y restar) y un valor visible todo el tiempo. Este contador debe ser manejado mediante el estado local usando el hook `useState`.
- Los botones del contador deben estar en **componentes separados** para facilitar su reutilización futura.
- Mostrar el clima de al menos 6 países, utilizando la API de **OpenWeatherMap**.
- Permitir que el usuario haga clic en cualquier país para obtener su pronóstico extendido. Este pronóstico debe ser almacenado en **Redux** para que persista durante las interacciones.


## 2. Creacion del proyecto
1. Crear el proyecto:
>$ npm create vite@latest nombreProyecto -- --template react

2. Acceder al directorio del mismo
>$ cd front-dos
3. Instalar dependencias necesarias
>$ npm install
4. Levantar el servidor de desarrollo:
>$ npm run dev
> ➜  Local:   http://localhost:5173/


## 3. Dependencias necesarias:
Las dependencias principales para este proyecto incluyen:
-   **React Router DOM**: Para gestionar la navegación entre las pantallas. 
-  **Redux Toolkit + React Redux**: Para gestionar el estado global de la aplicación (incluyendo el clima y el contador).
-   **Redux Persist**: Para mantener el estado incluso después de una recarga de página.
- **Axios**: Para realizar peticiones HTTP a la API de OpenWeatherMap.

> npm install react-router-dom @reduxjs/toolkit react-redux  
> npm install redux-persist  
> npm install axios  

