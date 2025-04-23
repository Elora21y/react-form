import React, { use } from 'react';
import { FavColor, PersonalDetails } from '../FamilyTree/FamilyTree';

const Sister = () => {
    const colors = use(FavColor)
    const person2 = use(PersonalDetails)
    return (
        <div>
            <h3>Sister</h3>
            <p>{colors[1]}</p>
            <p>{person2.name}</p>
            <p>{person2.hobby[1]}</p>
        </div>
    );
};

export default Sister;