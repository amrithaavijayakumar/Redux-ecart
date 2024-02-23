import { createSlice } from "@reduxjs/toolkit";
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    // to define actioms

    // Add to wishlist
    addToWishlist: (state, action) => {
      state.push(action.payload);
    },
    //delete
    deleteFromWishlist: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
  },
});

export const { addToWishlist, deleteFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
