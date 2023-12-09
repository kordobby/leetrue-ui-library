import { css } from "@emotion/react";
import { Menu } from "components/@elements/Menu";

const siderStyle = css`
  height: 100vh;
  box-sizing: border-box;
  min-width: 250px;
  background-color: blue;
  .scroll-box {
    width: 250px;
    position: fixed;
    top: 48px;
    bottom: 0;
    overflow-y: scroll;

    box-sizing: border-box;
  }
`;

export function Sider() {
  return (
    <div css={siderStyle}>
      <div className="scroll-box ">
        <Menu />
      </div>
    </div>
  );
}
