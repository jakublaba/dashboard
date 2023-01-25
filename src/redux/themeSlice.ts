import {createSlice} from "@reduxjs/toolkit";

export type Theme = "light" | "dark";

interface ThemeState {
    current: Theme
}

const initialThemeState: ThemeState = {
    current: "dark"
};

export const themeSlice = createSlice({
    name: "theme",
    initialState: initialThemeState,
    reducers: {
        toggleTheme: (state: ThemeState) => {
            state.current = state.current === "dark" ? "light" : "dark";
        }
    }
});

export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
