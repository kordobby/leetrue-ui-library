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

export function EventCapturing() {
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
  const { logCapturing } = useLogEvent("grand");
  return (
    <div
      css={css`
        padding: 20px;
        border: 1px solid ${colors.primary};
      `}
      onClickCapture={logCapturing}
      //   onClick={logEvent}
    >
      {props.children}
    </div>
  );
}

function Parent(props: PropsWithChildren) {
  const { logCapturing } = useLogEvent("parent");

  return (
    <div
      css={css`
        padding: 20px;
        border: 1px solid ${colors.heading};
      `}
      onClickCapture={logCapturing}
    >
      {props.children}
    </div>
  );
}

function Baby() {
  const { logCapturing } = useLogEvent("baby");

  return (
    <div
      css={css`
        padding: 20px;
        border: 1px solid ${colors.heading};
      `}
      onClickCapture={logCapturing}
    ></div>
  );
}
