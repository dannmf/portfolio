import React from 'react';
import { BsCodeSlash } from 'react-icons/bs';


function Header() {
    return (
        <header>
            <div className='leftSide'>
                <BsCodeSlash size={25} color='#000' />
            </div>
        </header>
    )
}

export default Header;