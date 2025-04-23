import React, { useState } from 'react';

const ProductForm = ({handleProduct}) => {
    const [error, setError] = useState('')
    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(e.target.name.value)
        // console.log(e.target.price.value)
        // console.log(e.target.quantity.value)

        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        // console.log(name, price, quantity)

        if(name == ''){
            setError('Please provide a product name')
            return;
        }
        else if(!price || isNaN(price)){
            setError('Please provide a price')
            return;
        }
        else if(price < 0){
            setError('Price cannot negative number')
            return;
        }
        else if(quantity.length === 0){
            setError('Please add a quantity')
            return;
        }
        else{
            setError('')
        }

        // const newProduct = {
        //     product : name,
        //     price : price,
        //     total : quantity
        // }
        const newProduct={
            name,
            price : Number(price),
            quantity : Number(quantity),
        }
        // console.log(newProduct)
        handleProduct(newProduct)
        e.target.reset()
    }
    return (
        <div>
            <p style={{color : 'red'}}>{error}</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Product Name'/>
                <br />
                <input type="text" name="price" placeholder='Product Price'/>
                <br />
                <input type="text" name="quantity" placeholder='Product Quantity'/>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ProductForm;