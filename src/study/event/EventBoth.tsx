import { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import colors from "constants/colors";

const useLogEvent = (target: string) => {
  const logBubbling = () => {
    console.log("logBubbling ===> ", target);
  };

  const logCapturing = () => {
    console.log("logCapturing ===> ", target);
  };

  return { logBubbling, logCapturing };
};

export function EventBoth() {
  return (
    <section>
      <GrandParent>
        <Parent>
          <Baby></Baby>
        </Parent>
      </GrandParent>
    </section>
  );
}

function GrandParent(props: PropsWithChildren) {
  const { logBubbling, logCapturing } = useLogEvent("grand");
  return (
    <div
      css={css`
        padding: 20px;
        border: 1px solid ${colors.primary};
      `}
      onClick={logBubbling}
      onClickCapture={logCapturing}
    >
      {props.children}
    </div>
  );
}

function Parent(props: PropsWithChildren) {
  const { logBubbling, logCapturing } = useLogEvent("parent");

  return (
    <div
      css={css`
        padding: 20px;
        border: 1px solid ${colors.heading};
      `}
      onClick={logBubbling}
      onClickCapture={logCapturing}
    >
      {props.children}
    </div>
  );
}

function Baby() {
  const onClickBaby = () => {
    console.log("***log Baby Component***");
  };

  return (
    <div
      css={css`
        padding: 20px;
        border: 1px solid ${colors.heading};
      `}
      onClick={onClickBaby}
    ></div>
  );
}
