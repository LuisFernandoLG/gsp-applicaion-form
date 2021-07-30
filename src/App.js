import { ThemeProvider } from "styled-components";
import { PageRouter } from "./components/PageRouter";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <PageRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
