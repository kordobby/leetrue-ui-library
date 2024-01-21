import { EventBubbling } from "study/event/EventBubbling";
import PageLayout from "components/layout/PageLayout";
export function StudyEventPage() {
  return (
    <PageLayout>
      <PageLayout.Title>EventStudy</PageLayout.Title>
      <PageLayout.Desc>이벤트 전파 방식에 대해 공부합니다.</PageLayout.Desc>

      <PageLayout.Item>
        <PageLayout.SubTitle>이벤트 버블링을 알아보자.</PageLayout.SubTitle>
        <PageLayout.SubDesc>
          특정 화면 요소에서 이벤트가 발생했을 때 해당 이벤트가 상위의 화면 요소들로 전달되어 가는 특성
        </PageLayout.SubDesc>
        <EventBubbling />
      </PageLayout.Item>
      <PageLayout.Item>
        <PageLayout.SubTitle>이벤트 캡쳐링을 알아보자.</PageLayout.SubTitle>
        <PageLayout.SubDesc>이벤트 버블링과 반대방향으로 진행되는 이벤트 전파 방식</PageLayout.SubDesc>
        <EventBubbling />
      </PageLayout.Item>
    </PageLayout>
  );
}
