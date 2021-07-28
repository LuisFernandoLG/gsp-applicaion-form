import { ThemeProvider } from "styled-components";
import { MainForm } from "./components/form/MainForm";
import PrivacyPolicy from "./components/PrivacyPolicy";
import { PageRouter } from "./components/PageRouter";
import { GlobalStyles } from "./styles/GlobalStyles";
import { theme } from "./styles/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <MainForm /> */}
        {/* <PrivacyPolicy /> */}
        <PageRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
