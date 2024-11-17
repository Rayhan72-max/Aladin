import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import Productcard from '../shared/Productcard';

const Products = (props) => {
    const products = useLoaderData();
    const [newProducts,setproducts]= useState(products)
    return (
      <div>  
      <div className='grid grid-cols-2 gap-4'>
      {newProducts.map(product=>
      <Productcard product={product}  newProducts={newProducts}
      setproducts={setproducts}></Productcard>)}      
      </div>
        </div>
    );
};

export default Products;