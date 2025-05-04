import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/global";
import { Router } from "./routes/Router";
import { ArticlesProvider } from "./contexts/ArticlesContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <ArticlesProvider>
        <Router />
      </ArticlesProvider>
    </ThemeProvider>
  );
}
