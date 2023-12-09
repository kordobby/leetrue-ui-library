import { css } from "@emotion/react";
import colors from "constants/colors";

const data = [
  { id: "accordion", name: "Accordion", path: "/component/accordion" },
  { id: "modal", name: "Modal", path: "/component/modal" },
];
export function Menu() {
  return (
    <div
      css={css`
        padding: 4px 16px;
        border-right: 1px solid ${colors.gray300};
        height: 100%;
      `}
    >
      {data.map((item) => (
        <a
          key={item.id}
          href={item.path}
          css={css`
            height: 34px;
            width: 100%;

            display: flex;
            justify-content: center;
            align-items: center;

            text-decoration: none;
            color: ${colors.primary};

            &:hover {
              background-color: ${colors.secondary};
            }

            border-radius: 30px;
            margin: 2px 0px;
          `}
        >
          {item.name}
        </a>
      ))}
    </div>
  );
}
