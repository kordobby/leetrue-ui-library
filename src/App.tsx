import "./App.css";
import { Header } from "components/layout/Header";
import { Sider } from "components/layout/Sider";
import { Main } from "components/layout/Main";
import { Body } from "components/layout/Body";
import { AccordionPage } from "pages/AccordionPage";

function App() {
  return (
    <>
      <Header />
      <Main>
        <>
          <Sider></Sider>
          <Body>
            <AccordionPage />
          </Body>
        </>
      </Main>
    </>
  );
}

export default App;
