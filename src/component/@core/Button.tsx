import { ButtonHTMLAttributes, Ref, forwardRef } from "react";
import { useId } from "react";
import { css } from "@emotion/react";
import colors from "constants/colors";

export type ButtonType = "default" | "primary" | "ghost";
export type ButtonSizeType = "md" | "lg" | "sm";

const buttonStyle = {
  primary: css`
    background-color: ${colors.primary};
    color: ${colors.white};
  `,
  default: css`
    background-color: ${colors.secondary};
    color: ${colors.primary};
  `,
  ghost: css`
    background-color: ${colors.white};
    color: ${colors.primary};
    box-shadow: 0 0 0 1px ${colors.primary} inset;
  `,
};

const buttonSizeStyle = {
  md: css`
    padding: 8px 16px;
    font-size: 14px;
  `,
  lg: css`
    padding: 12px 20px;
    font-size: 14px;
    font-size: 16px;
  `,
  sm: css`
    padding: 4px 8px;
    font-size: 12px;
    line-height: 1;
  `,
};

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  block?: boolean;
  btnType?: ButtonType;
  btnSize?: ButtonSizeType;
}

const Button = forwardRef((props: Props, ref: Ref<HTMLButtonElement>) => {
  const { btnType = "default", btnSize = "md", block = true, children, ...rest } = props;
  const id = useId();
  return (
    <button
      id={id}
      ref={ref}
      {...rest}
      css={css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        width: ${block ? "100%" : "auto"};
        ${buttonSizeStyle[btnSize]}
        ${buttonStyle[btnType]}
        &:focus {
          outline: none;
        }
        &:hover {
          opacity: 0.89;
        }
        &:disabled {
          background-color: ${colors.gray300};
          color: ${colors.gray600};
          cursor: not-allowed;
        }
        &:active {
          background-color: #681ff0;
        }
      `}
    >
      {children}
    </button>
  );
});

export default Button;
