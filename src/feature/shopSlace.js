import { createSlice } from "@reduxjs/toolkit";
import allProducts from "../data/product.json";
import allCategories from "../data/categories.json";

export const shopSlice = createSlice({
  name: "shop",
  initialState: {
    category: allCategories,
    products: allProducts,
    productsFilteredByCategory: [],
    productSelected: {},
  },
  reducers: {
    setProductsFilteredByCategory: (state, actions) => {
      state.productsFilteredByCategory = state.products.filter(
        (product) => product.category === actions.payload
      );
    },
  },
});

export const { setProductsFilteredByCategory } = shopSlice.actions;

export default shopSlice.reducer;
