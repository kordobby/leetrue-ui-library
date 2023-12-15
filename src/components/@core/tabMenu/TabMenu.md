## TabMenu

### 구성

- `TabMenu`
- `TabMenu.Root`
  - `initialValue` : string (고유 아이디)
  - `children`
- `TabMenu.Item`
  - `children`
  - `id`
  - `title`
  - `content`
  - `itemLength`
- `TabMenu.Trigger`
- `TabMenu.Content`

### 사용 예시

```jsx
import TabMenu from "...";

const Page = () => {
  return (
    <TabMenu.Root initialValue={initialValue}>
      {data.map(({ id, title, description }) => (
        <TabMenu.Item key={id} itemLength={data.length} id={id} title={title} content={description}>
          <TabMenu.Trigger />
          <TabMenu.Content />
        </TabMenu.Item>
      ))}
    </TabMenu.Root>
  );
};
```

### 고민

- 이 컴포넌트는 굳이 컴파운드 컴포넌트 패턴으로 작성할 필요가 없을 것 같았다.
- 굳이 나뉘어지지 않은 버전의 컴포넌트로 만들어봐야겠다.
- 탭 제목과 내용부분이 이어지도록 구성하는 부분에 있어서 css 고민이 있었는데, 우선 내용부분을 `position: absolute`를 넣어줬다. 다만 그렇게 되려면 버전이 여러개가 필요할 수도 있겠다.
- 탭메뉴를 열고 닫는 버전으로 만들어봐도 좋을 것 같다.
