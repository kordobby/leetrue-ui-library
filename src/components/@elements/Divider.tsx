import { css } from "@emotion/react";
import colors from "constants/colors";

export function Divider() {
  return (
    <div
      css={css`
        width: 100%;
        border-bottom: 1px solid ${colors.gray300};
        margin: 20px 0px;
      `}
    ></div>
  );
}
