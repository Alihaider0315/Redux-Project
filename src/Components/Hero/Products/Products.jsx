import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { add } from '../../../store/cartSlice.js';
import { toast } from 'react-toastify';
import { fetchProducts } from '../../../store/productSlice.js';
import { STATUSES } from '../../../store/productSlice.js';

const Products = () => {
  const dispatch = useDispatch();
  const {data: products , status} = useSelector((state)=>state.product);

  useEffect(() => {
    dispatch(fetchProducts());

  }, []);

  const handleAdd = (category) => {
    dispatch(add(category));
    toast.success(`${category.strCategory} added to cart`, {
      position: "bottom-right",
    });
  }
  if (status === STATUSES.LOADING) {

    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <h4 className='text-center text-lg'>Our Products</h4>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.slice(0, 8).map((category) => {
              const { idCategory, strCategory, strCategoryThumb } = category;
              return (
                <div className="lg:w-1/4 md:w-1/2 shadow-lg p-4 mb-2 w-full" key={idCategory}>
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img alt="category" className="object-cover object-center w-full h-full block" src={strCategoryThumb} />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">{strCategory}</h3>
                    <Link to={`/Singleproduct/${idCategory}`}>
                      <h2 className="text-gray-900 title-font text-lg uppercase font-medium">{strCategory}</h2>
                    </Link>
                    <p className="mt-1">$19</p>

                    <button onClick={() => handleAdd(category)} className="inline-flex items-center bg-indigo-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-indigo-700 rounded text-base mt-4 md:mt-5">Add To Cart</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
