import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

export type ThemeMode = "light" | "dark";

interface ThemeState {
    current: ThemeMode
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

export const themeSelector = (state: RootState): ThemeMode => state.theme.current;
export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;
