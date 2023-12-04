import { css } from "@emotion/react";
import { PropsWithChildren, ReactNode } from "react";
import ReactDom from "react-dom";

const Layout = ({ children }: PropsWithChildren) => {
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
        css={css`
          padding: 10px 20px;
          background-color: white;
          border-radius: 8px;

          display: flex;
          flex-direction: column;
        `}
      >
        {children}
      </div>
    </div>
  );
};

interface ModalProps extends PropsWithChildren {
  render: ReactNode;
  open: boolean;
}

const ModalRenderProps = ({ open, render }: ModalProps) => {
  const element = document.getElementById("root-modal");

  if (element === null || !open) {
    return null;
  }
  return ReactDom.createPortal(<Layout>{render}</Layout>, element);
};

export default ModalRenderProps;
