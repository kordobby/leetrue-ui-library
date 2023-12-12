import { Divider } from "components/@elements/Divider";
import * as Tooltip from "../components/@core/tooltip/Tooltip";
import PageLayout from "components/layout/PageLayout";
import { IoMdHelpCircle } from "react-icons/io";

export function TooltipPage() {
  return (
    <PageLayout>
      <PageLayout.Title>Accordion</PageLayout.Title>
      <PageLayout.Desc>아코디언 컴포넌트입니다.</PageLayout.Desc>

      <PageLayout.Item>
        <PageLayout.SubTitle>마우스를 올리고 내렸을 때</PageLayout.SubTitle>
        <PageLayout.SubDesc>마우스를 아이콘 위에 올리거나 내렸을 때 열고 닫힙니다.</PageLayout.SubDesc>
        <Tooltip.Root>
          <Tooltip.HoverTrigger>
            <IoMdHelpCircle />
          </Tooltip.HoverTrigger>
          <Tooltip.Content>내용을 확인하세요.</Tooltip.Content>
        </Tooltip.Root>
        <Divider />
        <PageLayout.SubTitle>클릭을 했을 때</PageLayout.SubTitle>
        <PageLayout.SubDesc>아이콘을 클릭했을 때 열고 닫히고, 외부 영역을 클릭하면 닫힙니다.</PageLayout.SubDesc>
        <Tooltip.Root>
          <Tooltip.ClickTrigger>
            <IoMdHelpCircle />
          </Tooltip.ClickTrigger>
          <Tooltip.Content>궁금한게 이런건가요?</Tooltip.Content>
        </Tooltip.Root>
      </PageLayout.Item>
    </PageLayout>
  );
}
