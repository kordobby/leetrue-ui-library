import { css } from "@emotion/react";
import { PropsWithChildren } from "react";

export function Body({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        box-sizing: border-box;

        display: flex;
        justify-content: center;
        width: 100%;
        align-items: center;
        padding-top: 48px;
      `}
    >
      {children}
    </div>
  );
}
