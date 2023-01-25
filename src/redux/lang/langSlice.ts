import {createSlice} from "@reduxjs/toolkit";

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

export const {toggleLang} = langSlice.actions;
export default langSlice.reducer;
