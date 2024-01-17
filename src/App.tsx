import "./App.css";
import { Header } from "components/layout/Header";
import { Sider } from "components/layout/Sider";
import { Main } from "components/layout/Main";
import { Body } from "components/layout/Body";
// eslint-disable-next-line import/no-extraneous-dependencies
// auth test
import { BrowserRouter } from "react-router-dom";
import Router from "libs/router/Router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <>
          <Sider></Sider>
          <Body>
            <Router />
          </Body>
        </>
      </Main>
    </BrowserRouter>
  );
}

export default App;
