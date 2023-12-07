import { css } from "@emotion/react";
import colors from "constants/colors";
import { PropsWithChildren, RefObject, createContext, useCallback, useContext, useRef, useState } from "react";

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
          transition: heigth 0.5 ease-in-out;
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
          &:first-child {
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
          }
          &:last-child {
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
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
      css={css`
        padding: 8px 16px;
        color: ${colors.primary};
        background: ${isExpanded && colors.secondary};
        cursor: pointer;
        :hover {
          color: red;
        }
      `}
      onClick={() => {
        item.setter(value);
      }}
    >
      <span>asdfasdfas</span>
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
        color: ${isExpanded ? colors.gray700 : colors.white};
        max-height: ${isExpanded ? "100%" : "0px"};
        overflow: hidden;
        transition: all 0.5s ease;
      `}
    >
      <div
        css={css`
          padding: 8px 16px;
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
