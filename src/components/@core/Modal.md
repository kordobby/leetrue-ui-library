## Modal

### 구성

- `Modal`
  - `open` : 모달의 열린 상태
  - `onClose` : 외부영역 클릭 시 콜백함수
- `Modal.Portal`
  - `children`
- `Modal.Header`
  - `children`
- `Modal.Body`
  - `children`
- `Modal.Footer`
  - `children`
- `Modal.useModal`
  - `open` : 모달의 열린 상태
  - `openModal` : 모달 여는 함수
  - `closeModal` : 모달 닫는 함수

### 사용 예시

```jsx
import Modal from "...";

const Page = () => {
  const modal = Modal.useModal();

  <Modal.Portal>
    <Modal open={modal.open} onClose={modal.closeModal}>
      <Modal.Header>제목</Modal.Header>
      <Modal.Body>
        <span>내용은 여기에 작성하기</span>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={modal.closeModal}>닫기</Button>
      </Modal.Footer>
    </Modal>
  </Modal.Portal>;
};
```

### 고민

- 팝업을 사용하는 컴포넌트 내에서 모달을 여닫는 상태를 선언하기보다 컴포넌트 자체에 상태를 넣은 상태에서 사용하고 싶었는데, 그렇게 되었을 때 모달을 여는 기능 자체를 `Trigger` 버튼을 만들어주지 않으면 사용하기 힘들었다.
- `Trigger` 버튼을 이용해서 여닫을 수는 있지만, 만약 이런 버튼이 아닌 다른 기능에 의해서 모달이 열리는 경우에는 또 팝업 사용이 힘든 경우가 발생했고 이 경우에는 다시 또 상태를 만들어줘야했다.
- 다른 전역상태관리를 통해서 만들어줄 수는 있겠지만, 다르게 생각했을 때 굳이 거기까지 추상화를 해줘야할 지는 모르겠다. 만약 필요하다면 만들어주는 작업을 해도 되겠지만 지금은 이 정도로 만들어두고 쓰는 것도 좋을 것 같다는 생각.
- 위 `Trgger` 케이스는 이런 모달이 아니라 마우스가 hover 되었을 때 툴팁이 올라오고 하는 경우에는 상태를 공용 컴포넌트 내부에 넣어두고 쓰는 식으로 만들어줘도 좋을 것 같다.
