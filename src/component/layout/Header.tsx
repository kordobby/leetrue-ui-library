import { css } from '@emotion/react';

const headerStyle = css`
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
  padding: 0 16px;
`;

const logoStyle = css``;
export function Header() {
  return (
    <div css={headerStyle}>
      <div css={logoStyle}>LEETRUE</div>
    </div>
  );
}