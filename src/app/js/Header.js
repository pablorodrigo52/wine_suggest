import React from 'react';
import '../css/Header.css';

import avatar from '../assets/avataaars.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'


function Header(){
    return (
        <section className='header'>
            <div className='icon childFlex'>
                <FontAwesomeIcon icon={faWineGlassAlt} />
            </div>
            <div className='menu childFlex'>
                <a href='#'>Home</a>
                <a href='javascript:void(0)'>About</a>
            </div>
            <div className='avatar childFlex'>
                <div className='me'>
                    <img id='avatar' src={avatar} alt="Me"/>
                </div>
            </div>
        </section>
    );
}

export default Header;