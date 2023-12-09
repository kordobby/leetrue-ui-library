import { useState } from "react";

type AccordionDataType = {
  id: string;
  title: string;
  description: string;
};

const data: AccordionDataType[] = [
  { id: "acdn-1", title: "좋아하는 가수는 누구인가요?", description: "이트루는 이세계아이돌을 사랑합니다." },
  { id: "acdn-2", title: "좋아하는 아이돌은 누구인가요?", description: "이트루는 이세계아이돌을 사랑합니다." },
  {
    id: "acdn-3",
    title: "좋아하는 아이돌 그룹의 멤버는 누가 있나요?",
    description: "고세구!",
  },
  { id: "acdn-4", title: "좋아하는 스트리머는 누구인가요?", description: "왁굳형 사랑해" },
];

export function AccordionStudy() {
  const [currentId, setCurrentId] = useState<string | null>(null);

  const toggleItem = (id: string) => () => {
    setCurrentId((prev) => (prev === id ? null : id));
  };
  return (
    <>
      {data.map((value) => (
        <AccordionItem key={value.id} {...value} toggleItem={toggleItem(value.id)} current={currentId === value.id} />
      ))}
    </>
  );
}

interface AccordionItemProps extends AccordionDataType {
  current: boolean;
  toggleItem: (id: string) => void;
}

function AccordionItem(props: AccordionItemProps) {
  const { id, title, description, toggleItem } = props;
  return (
    <li>
      <div onClick={() => toggleItem(id)}>{title}</div>
      <div>{description}</div>
    </li>
  );
}
