import Header from "../Header";
import AdList from "components/AdList";
import { MetamaskCtxProvider } from "context/metamask";
function App() {
  return (
    <div>
      <Header />
      <MetamaskCtxProvider>
        <main>
          <AdList />
        </main>
      </MetamaskCtxProvider>
    </div>
  );
}

export default App;
