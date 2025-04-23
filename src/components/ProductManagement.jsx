import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    const [products, setProducts] = useState([])

    const handleProduct = newProduct =>{
        setProducts([...products,newProduct])
    }
    console.log(products)
    return (
        <div>
            <ProductForm handleProduct={handleProduct}/>
            <ProductTable products={products}/>
        </div>
    );
};

export default ProductManagement;