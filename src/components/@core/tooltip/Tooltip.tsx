import { css } from "@emotion/react";
import colors from "constants/colors";
import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { throttle } from "lodash";

interface TooltipContextType {
  value: boolean;
  setter: (value: boolean) => void;
}

const TooltipContext = createContext<TooltipContextType | null>(null);

const useTooltipContext = () => {
  const context = useContext(TooltipContext);
  if (!context) {
    throw "Error";
  }

  return context;
};

function TooltipRoot({ children }: PropsWithChildren) {
  const [open, setOpen] = useState<boolean>(false);

  const setter = useCallback((value: boolean) => {
    setOpen(value);
  }, []);

  return (
    <TooltipContext.Provider value={{ value: open, setter }}>
      <div
        css={css`
          position: relative;

          button {
            color: ${colors.primary};
          }
          display: block;

          width: 100%;
        `}
        onMouseLeave={throttle(() => {
          if (open) {
            setter(false);
          }
        }, 3000)}
      >
        {children}
      </div>
    </TooltipContext.Provider>
  );
}

function TooltipHoverTrigger({ children }: PropsWithChildren) {
  const { value, setter } = useTooltipContext();

  return (
    <button
      css={css`
        padding: 0;
      `}
    >
      <div
        onMouseEnter={throttle((event) => {
          event.stopPropagation();
          if (!value) {
            setter(true);
          }
        }, 2000)}
      >
        {children}
      </div>
    </button>
  );
}

function TooltipClickTrigger({ children }: PropsWithChildren) {
  const { value, setter } = useTooltipContext();
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const closeModal = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node | null)) {
        setter(false);
      }
    };
    window.addEventListener("mousedown", closeModal);
    return () => {
      window.addEventListener("mousedown", closeModal);
    };
  }, [setter]);

  return (
    <button
      ref={ref}
      onClick={() => {
        setter(!value);
      }}
    >
      {children}
    </button>
  );
}

type TooltipPositionType = "left-top" | "top" | "right-top" | "left-bottom" | "bottom" | "right-bottom";

interface TooltipContentProps extends PropsWithChildren {
  // position: TooltipPositionType;
}
function TooltipContent({ children }: TooltipContentProps) {
  const { value } = useTooltipContext();

  if (!value) {
    return null;
  }
  return (
    <div
      css={css`
        top: 8px;
        left: 0.5px;
        position: absolute;
        z-index: 1;
      `}
    >
      <div
        css={css`
          width: 0;
          height: 0;
          border-bottom: 10px solid ${colors.outline};
          border-top: 10px solid transparent;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          margin-left: 8px;
        `}
      />
      <div
        css={css`
          position: relative;
          background-color: ${colors.outline};
          padding: 4px 8px;
          display: block !important;
          border-radius: 4px;
          font-size: 10px;
        `}
      >
        {children}
      </div>
    </div>
  );
}

const Root = TooltipRoot;
const HoverTrigger = TooltipHoverTrigger;
const ClickTrigger = TooltipClickTrigger;
const Content = TooltipContent;

export { Root, HoverTrigger, ClickTrigger, Content };
