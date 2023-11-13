import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../store/productSlice';
import { useDispatch , useSelector } from 'react-redux';

const Product = () => {
  const dispatch = useDispatch();
  const {data: products} = useSelector((state)=>state.product);

  useEffect(() => {
    dispatch(fetchProducts());

  }, []);


  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 mx-5">
        {products.map((product) => (
          <div className="border p-2" key={product.idCategory}>
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="product"
                className="object-cover object-center w-full h-full block"
                src={product.strCategoryThumb}
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">
                {product.strCategory}
              </h3>
              <Link to={`/product/${product.idCategory}`} className="text-blue-500">
              View Product
            </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
