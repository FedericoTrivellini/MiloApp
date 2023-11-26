import React from 'react';
import BotonMenu from '../BotonMenu';

function Menu() {
    return ( 
        <div className='flex flex-col p-2 space-y-2 bg-sky-300'>

            <BotonMenu to='/Porlet' texto='Ver Ordenes de Trabajo'/>
            <BotonMenu to='/Perfil' texto='Perfil'/>
            <BotonMenu to='/#' texto='Salir'/>
        </div>
    );
}

export default Menu;  