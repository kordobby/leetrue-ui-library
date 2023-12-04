import "./App.css";
import { Header } from "components/layout/Header";
import { Sider } from "components/layout/Sider";
import { Main } from "components/layout/Main";

// const pageLayout = css`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   box-sizing: border-box;
//   width: 100vh;
//   height: 100vh;

//   flex-direction: column;
// `;

function App() {
  return (
    <>
      <Header />
      <Main>
        <>
          <Sider></Sider>
        </>
      </Main>
    </>
  );
}

export default App;
