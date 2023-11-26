import React, { useState } from 'react';
import Menu from './Menu';
import BotonMenu from '../BotonMenu';

function Header() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <div>
            <header className='flex h-xxl flex-col bg-gradient-to-b from-sky-50 from-10% to-sky-300' >
                <div className="flex items-center justify-between h-16">
                    <h1 className="text-3xl font-bold text-sky-500 pl-4" href='/'>Milo</h1>
                    <nav className='flex items-center pr-2 '>
                        <BotonMenu to='/CrearOT' texto='+'/>
                        <BotonMenu to='/#' texto='☰' click={() => setShowMobileMenu(!showMobileMenu)}/>
                    </nav>
                </div>

            </header>
            {showMobileMenu && <Menu />}
        </div>
    );
};

export default Header;