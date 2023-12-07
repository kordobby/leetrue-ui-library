import { css } from "@emotion/react";
import * as Accordion from "../components/@core/accordion/Accordion";
export function AccordionPage() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        gap: 4px;
        h2 {
          margin: 0;
        }

        p {
          margin: 0;
          font-size: 12px;
          margin-bottom: 16px;
        }
      `}
    >
      <h2>Accordion</h2>
      <p>아코디언 컴포넌트입니다.</p>
      <Accordion.Root>
        <Accordion.Item value={"faq-1"}>
          <Accordion.Trigger>이거를 누면 열ㅕㅛ</Accordion.Trigger>
          <Accordion.Content>내용은 이ㄴㅓ죠</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value={"faq-2"}>
          <Accordion.Trigger>이거를 누면 열ㅕㅛ</Accordion.Trigger>
          <Accordion.Content>내용은 이ㄴㅓ죠</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value={"faq-3"}>
          <Accordion.Trigger>이거를 누면 열ㅕㅛ</Accordion.Trigger>
          <Accordion.Content>
            <ul>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </div>
  );
}
