import { css } from "@emotion/react";
import colors from "constants/colors";
import { PropsWithChildren } from "react";

function PageLayout({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 100%;
        width: 100%;
        gap: 4px;

        box-sizing: border-box;
        padding: 40px 80px;

        h1,
        h2 {
          margin: 0;
        }

        h2 {
          font-size: 20px;
        }
        p {
          color: ${colors.gray700};
          margin: 0;
          font-size: 14px;
          margin-bottom: 16px;
        }
      `}
    >
      {children}
    </div>
  );
}

function Title({ children }: { children: string }) {
  return <h1>{children}</h1>;
}

function SubTitle({ children }: { children: string }) {
  return <h2>{children}</h2>;
}

function Desc({ children }: { children: string }) {
  return <p>{children}</p>;
}

function Item({ children }: PropsWithChildren) {
  return (
    <div
      css={css`
        padding: 10px 0px;
      `}
    >
      {children}
    </div>
  );
}

PageLayout.Title = Title;
PageLayout.SubTitle = SubTitle;
PageLayout.Desc = Desc;
PageLayout.Item = Item;

export default PageLayout;
