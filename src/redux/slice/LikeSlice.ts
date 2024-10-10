import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IInitialState {
    likedProducts: number[];
}

const initialState: IInitialState = {
    likedProducts: JSON.parse(localStorage.getItem('likedProducts') || '[]'),
};

const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        likeProduct: (state, action: PayloadAction<number>) => {
            if (!state.likedProducts.includes(action.payload)) {
                state.likedProducts.push(action.payload);
                localStorage.setItem('likedProducts', JSON.stringify(state.likedProducts));
            }
        },
        unlikeProduct: (state, action: PayloadAction<number>) => {
            state.likedProducts = state.likedProducts.filter((id) => id !== action.payload);
            localStorage.setItem('likedProducts', JSON.stringify(state.likedProducts));
        },
    },
});

export const { likeProduct, unlikeProduct } = likeSlice.actions;
export default likeSlice.reducer;