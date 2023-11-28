import "./App.css";
import { Header } from "component/layout/Header";
import { Sider } from "component/layout/Sider";
import { Main } from "component/layout/Main";
import { css } from "@emotion/react";

const pageLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 100vh;
  height: 100vh;
`;

function App() {
  return (
    <>
      <Header />
      <Main>
        <>
          <Sider />
          <div css={pageLayout}>
            <div>page contents...........</div>
          </div>
        </>
      </Main>
    </>
  );
}

export default App;
