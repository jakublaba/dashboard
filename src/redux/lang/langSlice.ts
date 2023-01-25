import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../store";

export type Lang = "PL" | "EN";

interface LangState {
    current: Lang
}

const initialLangState: LangState = {
    current: "PL"
};

export const langSlice = createSlice({
    name: "lang",
    initialState: initialLangState,
    reducers: {
        toggleLang: (state: LangState) => {
            state.current = state.current === "PL" ? "EN" : "PL";
        }
    }
});

export const langSelector = (state: RootState): Lang => state.lang.current;
export const {toggleLang} = langSlice.actions;
export default langSlice.reducer;
