import { PropsWithChildren } from "react";
import { css } from "@emotion/react";
import colors from "constants/colors";

const useLogEvent = (target: string) => {
  const logEvent = () => {
    console.log("logEvent ===> ", target);
  };

  return logEvent;
};

export function EventBubbling() {
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
  const logEvent = useLogEvent("grand");
  return (
    <div
      css={css`
        padding: 20px;
        border: 1px solid ${colors.primary};
      `}
      onClick={logEvent}
    >
      {props.children}
    </div>
  );
}

function Parent(props: PropsWithChildren) {
  const logEvent = useLogEvent("parent");

  return (
    <div
      css={css`
        padding: 20px;
        border: 1px solid ${colors.heading};
      `}
      onClick={logEvent}
    >
      {props.children}
    </div>
  );
}

function Baby() {
  const logEvent = useLogEvent("baby");

  return (
    <div
      css={css`
        padding: 20px;
        border: 1px solid ${colors.heading};
      `}
      onClick={logEvent}
    ></div>
  );
}
