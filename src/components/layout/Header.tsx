import { css } from "@emotion/react";
import Button from "components/@elements/Button";

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
  return (
    <div css={style}>
      <div css={logoStyle}>LEETRUE</div>
      <Button block={false} btnType="primary" onClick={() => alert("move!")}>
        Docs
      </Button>
    </div>
  );
}
