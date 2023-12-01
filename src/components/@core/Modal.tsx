import { css } from "@emotion/react";
import { PropsWithChildren, useCallback, useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";

type ModalType = "ALERT" | "POPUP";
interface ModalProps extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  modalType?: ModalType;
}

export function Modal(props: ModalProps) {
  const { modalType = "POPUP", children, open, onClose } = props;
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeModal = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node | null)) {
        onClose();
      }
    };
    window.addEventListener("mousedown", closeModal);
    return () => {
      window.addEventListener("mousedown", closeModal);
    };
  }, [onClose]);

  if (!open) {
    return null;
  }
  return (
    <div
      css={css`
        background-color: yellow;
        width: 100%;
        height: 100%;

        position: fixed;
        z-index: 1;

        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        ref={ref}
        css={css`
          padding: 10px 20px;
          background-color: white;
          border-radius: 8px;

          display: flex;
          flex-direction: column;

          min-width: ${modalType === "ALERT" && "300px"};
        `}
      >
        {children}
      </div>
    </div>
  );
}

function ModalPortal({ children }: PropsWithChildren) {
  const element = document.getElementById("root-modal");

  if (element === null) {
    return null;
  }
  return ReactDom.createPortal(children, element);
}

function useModal() {
  const [open, setOpen] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return { open, openModal, closeModal };
}

function ModalHeader({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        font-weight: 600;
        padding-top: 10px;
      `}
    >
      {children}
    </div>
  );
}

function ModalBody({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;

        padding: 10px 0px;
      `}
    >
      {children}
    </div>
  );
}

function ModalFooter({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        display: flex;
        justify-content: flex-end;
        gap: 8px;
        width: 100%;

        padding: 10px 0px;
      `}
    >
      {children}
    </div>
  );
}

Modal.useModal = useModal;
Modal.Portal = ModalPortal;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

/**
             <Modal.Portal>
              <Modal open={open} onClose={closeModal}>
                <Modal.Header>제목</Modal.Header>
                <Modal.Body>
                  <span>와주셔서 감사합니다.</span>
                  <ul>
                    <li>앙녕</li>
                    <li>앙녕</li>
                    <li>앙녕</li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={closeModal}>닫기</Button>
                  <Button onClick={closeModal}>닫기</Button>
                </Modal.Footer>
              </Modal>
            </Modal.Portal>
 */
