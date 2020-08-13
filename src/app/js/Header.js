import React from 'react';
import '../css/Header.css';

import avatar from '../assets/avataaars.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWineGlassAlt } from '@fortawesome/free-solid-svg-icons'


function Header(props){
    const MENU = '1';
    const PROFILE = '2';

    if (props.menu === MENU){
        return (
            <section className='header'>
                <div className='icon childFlex'>
                    <FontAwesomeIcon icon={faWineGlassAlt} />
                </div>
                <div className='menu childFlex'>
                    {/* <a href='#'>Home</a> */}
                    <a href='https://github.com/pablorodrigo52/wine_suggest'>About</a>
                </div>
            </section>
        );
    } else if (props.menu === PROFILE) {
        return (
            <section className='header'>
                <div className='icon childFlex'></div>
                <div className='menu childFlex'></div>
                <div className='avatar childFlex'>
                    <div className='me'>
                        <img id='avatar' src={avatar} alt="Me"/>
                    </div>
                </div>
            </section>
        );
    } else {
        return (
            <h1> No header component react found! </h1>
        );
    }
}

export default Header;