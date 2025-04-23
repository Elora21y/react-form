import React, { use } from 'react';
import { MoneyContext } from '../FamilyTree/FamilyTree';

const Brother = () => {
    const [money, setMoney] = use(MoneyContext)
    console.log(money)
    return (
        <div>
            <h3>Brother</h3>
            <button onClick={()=> setMoney(money+1000)}>Add tk.1000</button>
        </div>
    );
};

export default Brother;