// SingleProduct.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductById, selectSingleProduct } from '../../store/singleProductSlice';

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(selectSingleProduct);

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  if (product) {
    return (
      <div>
        <h3>{product.strCategory}</h3>
        {/* Display other product details here */}
      </div>
    );
  }

  return <div>Loading...</div>;
};

export default SingleProduct;
