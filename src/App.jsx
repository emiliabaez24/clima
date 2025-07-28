import './App.css'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Pantalla1 from './paginas/Pantalla1';
import Pantalla2 from './paginas/Pantalla2';

function App() {
  return(
    <BrowserRouter>
    <div>
        <Routes>
          <Route path="/" element={<Pantalla1 />}/>
          <Route path="/Pantalla2" element={<Pantalla2 />}/>
          <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App
