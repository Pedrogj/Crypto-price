import { AppRouter } from "./router/AppRouter";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "./themeConfig/themeConfig";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
