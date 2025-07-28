import './pags.css';

import {Link} from 'react-router-dom';

export default function Pantalla1(){
    return(
        <div>
            <h1> Esta es la pantalla 1</h1>
            <Link to="/Pantalla2">
                <button className='bot'>Pantalla 2</button>
            </Link>
        </div>
    );
}