import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CustomerProduct, DeleteWishlistItemParams, Product, Wishlist } from "models";
import { ProductStore } from "../utils/types";

export interface productsState {
  publicProducts: CustomerProduct[];
  featuredProducts: CustomerProduct[];
  wishlist: Wishlist;
}

const initialState: productsState = {
  publicProducts: [],
  featuredProducts: [],
  wishlist: {
    userId: '',
    id: '',
    items: []
  }
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    storeProducts: (
      state: productsState,
      action: PayloadAction<CustomerProduct[]>
    ) => {
      state.publicProducts = action.payload.products;
    },
    storeFeaturedProducts: (
      state: productsState,
      action: PayloadAction<CustomerProduct[]>
    ) => {
      state.featuredProducts = action.payload.products;
    },
    storeWishlist: (
      state: productsState,
      action: PayloadAction<Wishlist>
    ) => {
      state.wishlist = action.payload
    },
    deleteItemFromWishlist: (
      state: productsState,
      action: PayloadAction<string> 
    ) => {
      const newList = state.wishlist.items?.filter(item => item.productId != action.payload);
      state.wishlist = {...state.wishlist, items: newList}
    },
    deleteFullWishlist: (
      state: productsState
    ) => {
      const newList:any = [];
      state.wishlist = {...state.wishlist, items: newList}
    }
  },
});

export const { storeProducts, storeFeaturedProducts, storeWishlist, deleteItemFromWishlist, deleteFullWishlist } = productsSlice.actions;

export default productsSlice.reducer;
