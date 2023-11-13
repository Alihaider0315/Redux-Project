// singleProductSlice.js

import { createSlice } from '@reduxjs/toolkit';

const singleProductSlice = createSlice({
  name: 'singleProduct',
  initialState: {
    product: null,
    status: 'idle',
  },
  reducers: {
    setSingleProduct: (state, action) => {
      state.product = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setSingleProduct, setStatus } = singleProductSlice.actions;

export const selectSingleProduct = (state) => state.singleProduct.product;

export const fetchProductById = (id) => async (dispatch) => {
  try {
    dispatch(setStatus('loading'));

    // Replace this with your API call to fetch a product by its ID
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    if (response.ok) {
      const productData = await response.json();
      dispatch(setSingleProduct(productData));
      dispatch(setStatus('succeeded'));
    } else {
      dispatch(setStatus('error'));
    }
  } catch (error) {
    console.error('Error while fetching product data:', error);
    dispatch(setStatus('error'));
  }
};

export default singleProductSlice.reducer;
