import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

interface ThemeState {
    theme: Theme
}

const initialThemeState: ThemeState = {
    theme: "dark"
};

export const themeSlice = createSlice({
    name: "theme",
    initialState: initialThemeState,
    reducers: {
        toggleTheme: (state: ThemeState, action: PayloadAction<Theme>) => {
            state.theme = action.payload;
        }
    }
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
