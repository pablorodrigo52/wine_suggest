import React from 'react';
import '../css/Content.css';


function Content (){
    return (
        <div className='content'>

            <div className='type'>
                <h2>Rosé</h2>
            </div>

            <div className='name'>
                <label>Bertani Bertarose Chiaretto Veneto Igt</label>
            </div>

            <div className='description'>
                With white pepper, white peach, and ginger on the nose, this salmon-colored wine from Chiaretto is crisp and expressive — and an absolute steal. “Put me on Lake Garda with a bottle of this and I’ll be good,” one panelist said. Average price: $14.
            </div>

            <div className='btn-randomize'>
                <button onClick={development}>Other Suggestion</button>
            </div>
            
        </div>
    );
}

function development(){
    alert('under implementation');
}

export default Content;
