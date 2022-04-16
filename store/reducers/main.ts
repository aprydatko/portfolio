import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mobileMenu: false,
    language: "en",
    theme: "light",
};

export const baseState = createSlice({
    name: "base",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload.language;
        },
        changeTheme: (state, action) => {
            state.theme = action.payload.theme;
        },
        submitMobileMenu: (state) => {
            state.mobileMenu = !state.mobileMenu;
        },
    },
});

export const { changeLanguage, changeTheme, submitMobileMenu } =
    baseState.actions;

export default baseState.reducer;
