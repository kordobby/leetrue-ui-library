import { css } from '@emotion/react';

const siderStyle = css`
  height: 100vh;
  box-sizing: border-box;
  width: 250px;

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
      <div className="scroll-box ">...menu</div>
    </div>
  );
}
