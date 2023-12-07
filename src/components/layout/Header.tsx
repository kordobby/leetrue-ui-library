import { css } from "@emotion/react";
import * as Modal from "components/@core/modal/Modal";
import Button from "components/@elements/Button";
import { useModal } from "hooks/useModal";

const style = css`
  position: fixed;
  top: 0;
  height: 48px;
  width: 100%;
  z-index: 2;

  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
  box-shadow: color(display-p3 0.012 0.012 0.184 / 0.091) 0px 1px 0px 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const logoStyle = css``;
export function Header() {
  const modal = useModal();
  return (
    <div css={style}>
      <div css={logoStyle}>LEETRUE</div>
      <Button onClick={modal.onOpen}></Button>
      <Modal.Root context={modal}>
        <Modal.Trigger block={false} btnType="primary">
          Docs
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Layout modalType="ALERT">
            <Modal.Header>제목</Modal.Header>
            <Modal.Body>내용이 들어갑니다.</Modal.Body>
            <Modal.Footer>
              <Modal.Trigger btnType="default">Hello</Modal.Trigger>
            </Modal.Footer>
          </Modal.Layout>
        </Modal.Portal>
      </Modal.Root>
    </div>
  );
}
