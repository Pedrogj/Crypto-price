import { AppRouter } from "../router/AppRouter";
import { ThemeProvider } from "@mui/material/styles";
import { customTheme } from "../themeConfig/themeConfig";
import { ContentApp } from "./AppStyles";

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <ContentApp>
        <AppRouter />
      </ContentApp>
    </ThemeProvider>
  );
}

export default App;
