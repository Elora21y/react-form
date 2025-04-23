import React, { use } from 'react';
import { MoneyContext } from './FamilyTree';

const Friend = () => {
    const money = use(MoneyContext)
    return (
        <div>
            <p>Friend : tk {money}</p>
        </div>
    );
};

export default Friend;