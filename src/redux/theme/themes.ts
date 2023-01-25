import {createTheme, Theme} from "@mui/material";
import {ThemeMode} from "./themeSlice";

const lightTheme = createTheme({
    palette: {
        mode: "light"
    }
});

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
});

const themes = new Map<ThemeMode, Theme>([
    ["dark", darkTheme],
    ["light", lightTheme]
]);

export default themes;
