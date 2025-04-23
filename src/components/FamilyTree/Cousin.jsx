import React from 'react';
import Speacial from '../MySelf/Speacial';
import Friend from './Friend';

const Cousin = ({name}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name == 'tom tom' && <Speacial></Speacial> 
            }
            {
                name ==='jo jo' && <Friend/>
            }
        </div>
    );
};

export default Cousin;