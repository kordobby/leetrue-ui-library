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

- AccordionItem 내부에서 Context 를 하나 더 만드냐 마냐에 대해 고민이 있었는데 추후 확장이 될 것을 고려하면 나쁘지 않은 방법이라고 생각했다.
- `transition`을 걸어줄 때 잘 먹지 않아서 어려웠었는데, fix된 값이 아니면 적용이 안되는 문제였었기에 수정할 수 있었다.
- 나중에 Accordion 내부 값을 검색 가능하게도 만들어봐야겠다.
  - 찬희님 블로그도 참고해보기
