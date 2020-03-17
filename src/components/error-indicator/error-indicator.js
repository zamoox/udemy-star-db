import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';
 

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src = {icon} alt="error-icon"></img>
            <span className="boom">BOOM!</span>
            <span>Something has gone wrong!</span>    
            <span>But we already sent droids to fix it!</span>    
        </div>                    
    );
}

export default ErrorIndicator;
