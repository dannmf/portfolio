import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';
import './header.css';

function Header() {
    return (
        <header className='header'>
            <div className='leftSide'>
                <BsCodeSlash size={25} color='#FFF' style={{ width: '80px' }} />
            </div>
            <div className='rightSide'>
                <div className='module'>Sobre</div>
                <div className='module'>Projetos</div>
                <div className='module'>Contato</div>
            </div>
        </header>
    )
}

export default Header;