## Tooltip

### 구성

- `Tooltip`
- `Tooltip.Root`
  - `children`
- `Accordion.TooltipHoverTrigger`
  - `children`
- `Accordion.TooltipClickTrigger`
  - `children`
- `Accordion.TooltipContent`
  - `children`

### 사용 예시

```jsx
import Accordion from "...";
import { IoMdHelpCircle } from "react-icons/io";

const Page = () => {
  return (
    <Tooltip.Root>
      <Tooltip.ClickTrigger>
        <IoMdHelpCircle />
      </Tooltip.ClickTrigger>
      <Tooltip.Content>도움이 필요할 때는 이것을 보세요.</Tooltip.Content>
    </Tooltip.Root>
  );
};
```

### 고민

- tooltip 을 열고 닫는 방법에 대한 케이스에 따른 trigger 를 따로 선언해주는 방식으로 작성해봤다.
- `mouseover` 이벤트를 다루는 동안 `over - out` 이 스위칭되는 이벤트가 무한하게 발생해서 고민이 많았는데, 툴팁이 나타났을 때 트리거 영역이 가려지는 것 때문에 발생했던 것으로 확인했다. 영역 조정을 통해서 수정완료.
- 우선 구현만 했고, 추가로 해주면 좋을 것은 툴팁의 위치를 조절할 수 있도록 작업해주기.
