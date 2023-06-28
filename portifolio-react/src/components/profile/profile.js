import React from 'react';
import './profile.css';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import {MdOutlineLibraryBooks} from 'react-icons/md';


function Profile() {
    return (
        <div className='profile'>
            <div className='container'>
                <h3 className='intro' >  
                <div>
                    Olá 👋 eu me chamo Daniel
                    <span className = 'icons'>
                    <a href='https://github.com/dannmf' target='_blank'><BsGithub className = 'icon'/></a>
                    <a href='https://www.linkedin.com/in/dannmf/' target='_blank'><BsLinkedin className = 'icon'/></a>
                    <a href='https://drive.google.com/file/d/1sfSit34KY88c0b9FAfEzfnj2TSJp5hYD/view' target="_blank" rel="noopener noreferrer"><MdOutlineLibraryBooks className = 'icon'/></a>
                    </span>
                </div>
                </h3>
                <h1 className='frontEnd'>FRONT-END</h1>
                <h1 className='developer'>DEVELOPER</h1>
            </div>
        </div>
    )
}

export default Profile;