import "./App.css";
import { Page, Home } from "./containers";

function App() {
  return (
    <Page
      webData={{
        title: "NAME",
        subTitle: "WEB SUB TITLE.",
        contact: "CONTACT DETAILS"
      }}
    >
      <Home />
    </Page>
  );
}

export default App;
