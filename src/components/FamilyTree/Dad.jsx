import React from 'react';
import MySelf from '../MySelf/MySelf';
import Sister from '../MySelf/Sister';
import Brother from '../MySelf/Brother';

const Dad = () => {
    return (
        <div>
            <h3>Dad</h3>
            <section className='flex'>
                <MySelf/>
                <Sister></Sister>
                <Brother></Brother>
            </section>
        </div>
    );
};

export default Dad;