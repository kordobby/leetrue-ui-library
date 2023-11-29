import Input, { InputSizeType } from "component/@core/Input";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  inputSize?: InputSizeType;
  block?: boolean;
  error?: boolean;
  bottomText?: string;
}

export function InputSample(props: Props) {
  return (
    <Input {...props}>
      <Input.TextField placeholder="placeholder" />
    </Input>
  );
}
