import { css } from "@emotion/react";
import colors from "constants/colors";
import {
  Children,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
  Ref,
  cloneElement,
  forwardRef,
  useId,
} from "react";

export type InputSizeType = "md" | "lg" | "sm";
const sizeStyle = {
  md: css`
    padding: 6px 8px;
    height: 34px;
    font-size: 14px;
  `,
  lg: css`
    padding: 8px 12px;
    height: 42px;
    font-size: 18px;
  `,
  sm: css`
    padding: 4px 6px;
    height: 22px;
    font-size: 12px;
  `,
};

const paddingStyle = {
  md: css`
    padding: 6px 8px 6px 30px;
  `,
  lg: css`
    padding: 8px 12px 8px 30px;
  `,
  sm: css``,
};

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
  inputSize?: InputSizeType;
  block?: boolean;
  bottomText?: string;
  error?: boolean;
}

const Input = (props: Props) => {
  const { error = false, bottomText, block = true, label, children, inputSize = "md", ...rest } = props;

  const child = Children.only(children);
  const uniqueId = useId();
  const id = child.props.id ?? uniqueId;
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        span {
          margin-left: 4px;
          margin-top: 2px;
          font-size: 11px;
          color: ${error ? "red" : colors.primary};
        }
      `}
    >
      <div
        css={css`
          border: 1px solid ${error ? "red" : colors.primary};
          border-radius: 4px;
          box-sizing: border-box;
          padding: 6px 8px;
          width: ${block ? "100%" : "auto"};
          width: 100%;
          position: relative;
          ${sizeStyle[inputSize]}
          ${label && paddingStyle[inputSize]}
        label {
            position: absolute;
            font-size: 10px;
            left: 4px;
            top: 2px;
            color: ${colors.gray700};
          }
          :focus-within {
            outline: 2px solid ${error ? "#ffdede" : colors.outline};
            outline-offset: 0px;
          }
        `}
        {...rest}
      >
        {label && inputSize !== "sm" && <label htmlFor={id}>{label}</label>}
        {cloneElement(child, {
          id,
          ...child.props,
        })}
      </div>
      {bottomText && <span>{bottomText}</span>}
    </div>
  );
};

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {}

const TextField = forwardRef((props: TextFieldProps, ref: Ref<HTMLInputElement>) => {
  const { ...rest } = props;
  return (
    <input
      ref={ref}
      {...rest}
      css={css`
        width: 100%;
        padding: 0;
        margin: 0;
        height: 100%;
        outline: none;
        border: none;
        box-sizing: border-box;

        background-color: ${colors.white};

        ::placeholder {
          color: ${colors.gray400};
        }
      `}
    />
  );
});

Input.TextField = TextField;
export default Input;
