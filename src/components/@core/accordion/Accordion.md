## Modal

### 구성

- `Accordion`
- `Accordion.Root`
  - `children`
- `Accordion.Item`
  - `children`
  - `value` : 아코디언 아이템 고유 값(label)
- `Accordion.Trigger`
  - `children`
- `Accordion.Footer`
  - `children`

### 사용 예시

```jsx
import Accordion from "...";

const Page = () => {
  <Accordion.Root>
    <Accordion.Item value={"item-1"}>
      <Accordion.Trigger>제목 입력1</Accordion.Trigger>
      <Accordion.Content>내용 입력 또는 컴포넌트 작성</Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value={"item-2"}>
      <Accordion.Trigger>제목 입력2</Accordion.Trigger>
      <Accordion.Content>
        <ul>
          <li>아이네</li>
          <li>징버거</li>
          <li>릴파</li>
          <li>주르르</li>
          <li>고세구</li>
          <li>비챤</li>
        </ul>
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>;
};
```

### 고민

- AccordionItem 내부에서 Context 를 하나 더 만드냐 마냐에 대해 고민이 있었는데 추후 확장이 될 것을 고려하면 나쁘지 않은 방법이라고 생각했다.
- `transition`을 걸어줄 때 잘 먹지 않아서 어려웠었는데, fix된 값이 아니면 적용이 안되는 문제였었기에 수정할 수 있었다.
- 나중에 Accordion 내부 값을 검색 가능하게도 만들어봐야겠다.
  - 찬희님 블로그도 참고해보기
