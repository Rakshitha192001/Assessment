
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk('products', async () => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        return response.data;
    } catch (error) {
        throw error;
    }
});
const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [],
        status: null,
        temp:[],
        cart:[],
    },
    reducers:{
        getAllProducts: (state,action)=>{
            state.temp = state.items
        },
        search: (state,action)=>{
            const filteredItem = state.items.filter((item) =>
                item.title.toLowerCase().includes(action.payload)
        );
            state.temp = filteredItem
        },
        sortAsc: (state,action)=>{
            state.temp.sort((a, b) => a.price - b.price);
        },
        sortDsc: (state,action)=>{
                state.temp.sort((a, b) => b.price - a.price);
              },
        filterByCategory: (state,action)=>{
            let filtered = state.items.filter((item)=>{
                if(item.category === action.payload){
                    return item
                }
            })
            state.temp = [...filtered]
            },
        addToCart: (state, action) => {
            const foundItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (foundItemIndex >= 0) {
              state.cart[foundItemIndex].itemQuantity += 1;
            } else {
              const alt = { ...action.payload, itemQuantity: 1 };
              state.cart = [...state.cart, alt];
            }
          },
        },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'pending';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.temp = action.payload;
            state.status = 'fulfilled';
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'rejected';
        });
    }
});
export default productsSlice.reducer;
export const {search,sortAsc,sortDsc,filterByCategory,getAllProducts ,addToCart} = productsSlice.actions