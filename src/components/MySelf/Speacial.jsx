import React, { useContext } from 'react';
import { AssetContext } from '../FamilyTree/FamilyTree';

const Speacial = () => {
    const asset = useContext(AssetContext)
    return (
        <div>
            <p>Spacial : {asset}</p>
        </div>
    );
};

export default Speacial;