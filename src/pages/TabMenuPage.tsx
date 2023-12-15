import PageLayout from "components/layout/PageLayout";
import * as TabMenu from "../components/@core/tabMenu/TabMenu";
import data from "components/@core/tabMenu/data";

export function TabMenuPage() {
  const initialValue = data[0].id;
  return (
    <PageLayout>
      <PageLayout.Title>TabMenu</PageLayout.Title>
      <PageLayout.Desc>탭 메뉴 컴포넌트입니다.</PageLayout.Desc>

      <PageLayout.Item>
        <PageLayout.SubTitle>컴파운드 컴포넌트 패턴</PageLayout.SubTitle>
        <PageLayout.SubDesc>여러 개의 아이템을 열어둘 수 있는 타입의 아코디언입니다.</PageLayout.SubDesc>
        <TabMenu.Root initialValue={initialValue}>
          {data.map((value) => (
            <TabMenu.Item
              key={value.id}
              itemLength={data.length}
              id={value.id}
              title={value.title}
              content={value.description}
            >
              <TabMenu.Trigger />
              <TabMenu.Content />
            </TabMenu.Item>
          ))}
        </TabMenu.Root>
      </PageLayout.Item>
    </PageLayout>
  );
}
