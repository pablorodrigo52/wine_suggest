import React from 'react';
import '../css/Widget.css';

import wine_sample from '../assets/wine_sample.png'

function Widget (){
    return (
        <div className='padding'>
            <div className='widget'>
                <img src={wine_sample} alt="Bertani Bertarose Chiaretto Veneto Igt"></img>
                <div className='location'>
                    Veneto, Italy
                </div>
            </div>

        </div>
    );
}

export default Widget;