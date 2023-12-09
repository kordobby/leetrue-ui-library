import { css } from "@emotion/react";
import * as Accordion from "../components/@core/accordion/Accordion";
import PageLayout from "components/layout/PageLayout";
import { Divider } from "components/@elements/Divider";
export function AccordionPage() {
  return (
    <PageLayout>
      <PageLayout.Title>Accordion</PageLayout.Title>
      <PageLayout.Desc>아코디언 컴포넌트입니다.</PageLayout.Desc>

      <PageLayout.Item>
        <PageLayout.SubTitle>컴파운드 컴포넌트 패턴</PageLayout.SubTitle>
        <PageLayout.SubDesc>여러 개의 아이템을 열어둘 수 있는 타입의 아코디언입니다.</PageLayout.SubDesc>
        <Accordion.Root>
          <Accordion.Item value={"option-1"}>
            <Accordion.Trigger>좋아하는 가수는 누구인가요?</Accordion.Trigger>
            <Accordion.Content>이트루는 이세계아이돌을 사랑합니다.</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value={"option-2"}>
            <Accordion.Trigger>좋아하는 아이돌은 누구인가요?</Accordion.Trigger>
            <Accordion.Content>이트루는 이세계아이돌을 사랑합니다.</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value={"option-3"}>
            <Accordion.Trigger>좋아하는 아이돌 그룹의 멤버는 누가 있나요?</Accordion.Trigger>
            <Accordion.Content>
              <ul
                css={css`
                  padding: 0 0 0 16px;
                  margin: 0;
                `}
              >
                <li>아이네</li>
                <li>징버거</li>
                <li>릴파</li>
                <li>주르르</li>
                <li>고세구</li>
                <li>비챤</li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value={"option-4"}>
            <Accordion.Trigger>좋아하는 아이돌은 누구인가요?</Accordion.Trigger>
            <Accordion.Content>이트루는 이세계아이돌을 사랑합니다.</Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </PageLayout.Item>
      <Divider />
      <PageLayout.Item>
        <PageLayout.SubTitle>state만 사용해서 만들기</PageLayout.SubTitle>
        <PageLayout.SubDesc>이번에는 하나의 아이템을 열어둘 수 있는 타입의 아코디언입니다.</PageLayout.SubDesc>
        <Accordion.Root>
          <Accordion.Item value={"option-1"}>
            <Accordion.Trigger>좋아하는 가수는 누구인가요?</Accordion.Trigger>
            <Accordion.Content>이트루는 이세계아이돌을 사랑합니다.</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value={"option-2"}>
            <Accordion.Trigger>좋아하는 아이돌은 누구인가요?</Accordion.Trigger>
            <Accordion.Content>이트루는 이세계아이돌을 사랑합니다.</Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value={"option-3"}>
            <Accordion.Trigger>좋아하는 아이돌 그룹의 멤버는 누가 있나요?</Accordion.Trigger>
            <Accordion.Content>
              <ul
                css={css`
                  padding: 0 0 0 16px;
                  margin: 0;
                `}
              >
                <li>아이네</li>
                <li>징버거</li>
                <li>릴파</li>
                <li>주르르</li>
                <li>고세구</li>
                <li>비챤</li>
              </ul>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item value={"option-4"}>
            <Accordion.Trigger>좋아하는 아이돌은 누구인가요?</Accordion.Trigger>
            <Accordion.Content>이트루는 이세계아이돌을 사랑합니다.</Accordion.Content>
          </Accordion.Item>
        </Accordion.Root>
      </PageLayout.Item>
    </PageLayout>
  );
}
