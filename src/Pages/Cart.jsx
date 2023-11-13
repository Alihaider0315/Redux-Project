import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../store/cartSlice.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);

  const handleRemove = (product) => {
    dispatch(remove(product.idCategory));
    toast.warn('Item removed from the cart', {
      position: 'bottom-right',
    });
  };
  
  return (
    <div>
      <div className="container mt-5 mx-3">
        <ToastContainer />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div className="border p-2" key={product.idCategory}>
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="category"
                  className="object-cover object-center w-full h-full block"
                  src={product.strCategoryThumb}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font uppercase mb-1">
                  {product.strCategory}
                </h3>
                <p className="mt-1">$19</p>
                <button
                  onClick={() => handleRemove(product)}
                  className="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-700 rounded text-base mt-2 md:mt-3"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
