import { css } from "@emotion/react";
import colors from "constants/colors";
import { PropsWithChildren, createContext, useCallback, useContext, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface AccordionContextType {
  value: Set<string>;
  setter: (item: string) => void;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw "Error";
  }

  return context;
};

function AccordionRoot(props: PropsWithChildren) {
  const [item, setItem] = useState<Set<string>>(new Set());

  const setter = useCallback(
    (value: string) => {
      const newItem = new Set(item);

      if (item.has(value)) {
        newItem.delete(value);
        setItem(newItem);
      } else {
        newItem.add(value);
        setItem(newItem);
      }
    },
    [item]
  );

  return (
    <AccordionContext.Provider value={{ value: item, setter }}>
      <div
        css={css`
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          border-radius: 4px;
        `}
      >
        {props.children}
      </div>
    </AccordionContext.Provider>
  );
}

interface AccordionItemProps extends PropsWithChildren {
  value: string;
}

const AccordionItemContext = createContext<{ value: string }>({ value: "" });

const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw "Error";
  }

  return context;
};

function AccordionItem({ value, children }: AccordionItemProps) {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div
        css={css`
          min-width: 300px;
          border: 1px solid ${colors.gray300};
          border-bottom: none;
          &:first-child {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;

            .trigger {
              border-top-left-radius: 4px;
              border-top-right-radius: 4px;
            }
          }
          &:last-child {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            border-bottom: 1px solid ${colors.gray300};
            .trigger {
              border-bottom-left-radius: 4px;
              border-bottom-right-radius: 4px;
            }
          }
        `}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
}
function AccordionTrigger({ children }: { children: string }) {
  const item = useAccordionContext();
  const { value } = useAccordionItemContext();
  const isExpanded = item.value.has(value);

  return (
    <div
      className="trigger"
      css={css`
        padding: 8px 12px;
        color: ${colors.heading};
        background: ${isExpanded && colors.secondary};
        border-radius: ${isExpanded && 0} !important;
        transition: ${isExpanded ? "all 0.5s ease-in" : "all 0.3s ease-out 0.2s"};
        cursor: pointer;
        :hover {
          background-color: ${colors.outline};
        }
        font-size: 12px;
        font-weight: 600;

        display: flex;
        justify-content: space-between;

        svg {
          color: ${colors.gray500};
        }
      `}
      onClick={() => {
        item.setter(value);
      }}
    >
      <span>{children}</span>
      {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </div>
  );
}

function AccordionContent({ children }: PropsWithChildren) {
  const item = useAccordionContext();
  const ref = useRef<HTMLDivElement>(null);
  const { value } = useAccordionItemContext();

  const isExpanded = item.value.has(value);

  return (
    <div
      ref={ref}
      css={css`
        max-height: ${!isExpanded ? "0px" : "1000px"};
        overflow: hidden;
        transition: ${isExpanded ? "all 0.5s ease-in" : "all 0.3s ease-out"};
        transition-delay: 0;
      `}
    >
      <div
        css={css`
          padding: 8px 12px;
          font-size: 11px;
        `}
      >
        {children}
      </div>
    </div>
  );
}

const Root = AccordionRoot;
const Item = AccordionItem;
const Trigger = AccordionTrigger;
const Content = AccordionContent;

export { Root, Item, Trigger, Content };
