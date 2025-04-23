import React, { use } from 'react';
import Cousin from './Cousin';
import { MoneyContext } from './FamilyTree';

const Uncle = () => {
    const [money , setMoney] = use(MoneyContext)
    return (
        <div>
           <h3> Uncle</h3>
            <section className='flex'>
            <Cousin name ='Alice'/>
            <Cousin name='John'/>
            </section>
            <button onClick={()=> setMoney(money + 5000)}>Add tk.5000</button>
        </div>
    );
};

export default Uncle;