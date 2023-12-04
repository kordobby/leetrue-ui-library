import { css } from "@emotion/react";
import Button, { ButtonProps } from "components/@elements/Button";
import { ModalContextType } from "hooks/useModal";
import { createContext, PropsWithChildren, useContext, useEffect, useRef } from "react";
import ReactDom from "react-dom";

type ModalType = "ALERT" | "POPUP";

interface ModalContextProps extends PropsWithChildren {
  context: ModalContextType;
}
const ModalContext = createContext<ModalContextType | null>(null);

function ModalRoot(props: ModalContextProps) {
  const element = document.getElementById("root-modal");

  if (element === null) {
    return null;
  }

  return <ModalContext.Provider value={props.context}>{props.children}</ModalContext.Provider>;
}

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw "Error";
  }
  return context;
};

function ModalPortal({ children }: PropsWithChildren) {
  const element = document.getElementById("root-modal");

  if (element === null) {
    return null;
  }
  return ReactDom.createPortal(children, element);
}

interface ModalProps extends PropsWithChildren {
  modalType?: ModalType;
}

const ModalLayout = (props: ModalProps) => {
  const { modalType = "POPUP", children } = props;
  const ref = useRef<HTMLDivElement>(null);
  const context = useModalContext();

  useEffect(() => {
    const closeModal = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node | null)) {
        context.onClose();
      }
    };
    window.addEventListener("mousedown", closeModal);
    return () => {
      window.addEventListener("mousedown", closeModal);
    };
  }, [context]);

  if (!context.open) {
    return null;
  }
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;

        position: fixed;
        z-index: 1;

        display: flex;
        justify-content: center;
        align-items: center;

        background: rgba(0, 0, 0, 0.2);
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
};

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

interface TriggerProps extends ButtonProps {}
function ModalTrigger(props: TriggerProps) {
  const { children, ...rest } = props;
  const context = useModalContext();
  const onToggle = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("...");
    const callback = context.open ? context.onClose : context.onOpen;
    if (props.onClick) {
      props.onClick(event);
    }
    callback();
  };
  return (
    <Button onClick={onToggle} {...rest}>
      {children}
    </Button>
  );
}

const Root = ModalRoot;
const Layout = ModalLayout;
const Header = ModalHeader;
const Body = ModalBody;
const Footer = ModalFooter;
const Trigger = ModalTrigger;
const Portal = ModalPortal;
export { Root, Portal, Layout, Header, Body, Footer, Trigger };
