import { instance } from './authThunk.js';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProducts = createAsyncThunk(
    'products/getAll',
    async (query, thunkAPI) => {
        try {
            const response = await instance.get(`/products?keyWord=${query}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);

export const getProductsOfBlood = createAsyncThunk(
    'products/getBood',
    async (query, thunkAPI) => {
        try {
        const response = await instance.get(`/products?blood=${query}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);
export const getProductsOfBloodNotRecommended = createAsyncThunk(
    'products/getBoodNot',
    async (query, thunkAPI) => {
        try {
        const response = await instance.get(`/products?blood=${query}`);
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);

export const getProductsCategories = createAsyncThunk(
    'products/categories',
    async (_, thunkAPI) => {
        try {
            const response = await instance.get('/products/categories');
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);
