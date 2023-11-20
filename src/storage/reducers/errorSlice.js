import { createSlice } from "@reduxjs/toolkit";

import {
    registration,
    login,
    logout,
    refreshUser,
    avatarUpdate,
} from '../operations/authThunk';
import { exercisesCategory, getAllExercises } from "../operations/exercisesThunk";

const initialState = {
    message: null,
};

const REJECTED = (state, action) => {
    state.message = action.payload;
};

const PENDING = (state) => {
    state.message = null;
};

const errorSlice = createSlice({
    name: 'error',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registration.pending, PENDING)
            .addCase(registration.rejected, REJECTED)

            .addCase(login.pending, PENDING)
            .addCase(login.rejected, REJECTED)

            .addCase(logout.pending, PENDING)
            .addCase(logout.rejected, REJECTED)

            .addCase(refreshUser.pending, PENDING)
            .addCase(refreshUser.rejected, REJECTED)
        
            .addCase(avatarUpdate.pending, PENDING)
            .addCase(avatarUpdate.rejected, REJECTED)

            .addCase(getAllExercises.pending, PENDING)
            .addCase(getAllExercises.rejected, REJECTED)
            
            .addCase(exercisesCategory.pending, PENDING)
            .addCase(exercisesCategory.rejected, REJECTED)
    },
});

export const errorReducer = errorSlice.reducer;