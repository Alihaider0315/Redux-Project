import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

const productSlice = createSlice({
  name: 'product',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      dispatch(setProducts(response.data.categories));
      dispatch(setStatus(STATUSES.IDLE));
    } catch (error) {
      console.error(error);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}
