import "./App.css";
import { Header } from "components/layout/Header";
import { Sider } from "components/layout/Sider";
import { Main } from "components/layout/Main";
import * as Accordion from "components/@core/accordion/Accordion";

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
      {/* <Header /> */}
      <Main>
        <>
          <Sider></Sider>
          <div>
            <Accordion.Root>
              <Accordion.Item value={"hello"}>
                <Accordion.Trigger>이거를 누면 열ㅕㅛ</Accordion.Trigger>
                <Accordion.Content>내용은 이ㄴㅓ죠</Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value={"yes"}>
                <Accordion.Trigger>이거를 누면 열ㅕㅛ</Accordion.Trigger>
                <Accordion.Content>내용은 이ㄴㅓ죠</Accordion.Content>
              </Accordion.Item>
              <Accordion.Item value={"bye"}>
                <Accordion.Trigger>이거를 누면 열ㅕㅛ</Accordion.Trigger>
                <Accordion.Content>내용은 이ㄴㅓ죠</Accordion.Content>
              </Accordion.Item>
            </Accordion.Root>
          </div>
        </>
      </Main>
    </>
  );
}

export default App;
