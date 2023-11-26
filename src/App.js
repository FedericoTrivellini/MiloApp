import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './componentes/Layout';
import CrearOT from './componentes/compartidos/Main/CrearOT/CrearOT';
import Porlet from './componentes/compartidos/Main/OTSinAsignar/Porlet';
import Perfil from './componentes/compartidos/Main/Perfil/Perfil';

function App() {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Porlet/>}/>
          <Route path='/CrearOT' element={<CrearOT/>} />
          <Route path='/Porlet' element={<Porlet/>} />
          <Route path='/Perfil' element={<Perfil/>} />
        </Route>
    </Routes>
  );
}

export default App;
