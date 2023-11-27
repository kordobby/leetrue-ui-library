import { css } from '@emotion/react';
import { PropsWithChildren } from 'react';

const mainStyle = css`
  box-sizing: border-box;

  display: flex;
  justify-content: flex-start;
`;

export function Main({ children }: PropsWithChildren) {
  return <main css={mainStyle}>{children}</main>;
}
