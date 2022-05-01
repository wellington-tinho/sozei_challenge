import { Header } from "./components/header";
import { ToolsProvider } from "./components/hooks/useTools";
import { ToolsArea } from "./components/toolsArea";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <>  
    <ToolsProvider >
      <GlobalStyle/>
      <Header />
      <ToolsArea/>
    </ToolsProvider>
    </>
  )
}

export default App
