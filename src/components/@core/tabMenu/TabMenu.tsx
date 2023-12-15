import { css } from "@emotion/react";
import colors from "constants/colors";
import { PropsWithChildren, ReactNode, createContext, useCallback, useContext, useState } from "react";

interface TabMenuContextType {
  value: string;
  setter: (id: string) => void;
}

const TabMenuContext = createContext<TabMenuContextType | null>(null);
const useTabMenuContext = () => {
  const context = useContext(TabMenuContext);
  if (!context) {
    throw "Error";
  }

  return context;
};

interface TabMenuRootProps extends PropsWithChildren {
  initialValue: string;
}
function TabMenuRoot({ initialValue, children }: TabMenuRootProps) {
  const [item, setItem] = useState<string>(initialValue);

  const setter = useCallback((id: string) => {
    setItem(id);
  }, []);

  return (
    <TabMenuContext.Provider value={{ value: item, setter }}>
      <div
        css={css`
          display: flex;
          width: 600px;
          height: 100%;
          position: relative;
        `}
      >
        {children}
      </div>
    </TabMenuContext.Provider>
  );
}

interface TabMenuItemProps extends PropsWithChildren {
  id: string;
  title: string;
  content: (props: unknown) => JSX.Element;
  itemLength?: number;
}

const TabMenuItemContext = createContext<{
  id: string;
  title: string;
  content: (props: unknown) => JSX.Element;
} | null>(null);

const useTabMenuItemContext = () => {
  const context = useContext(TabMenuItemContext);
  if (!context) {
    throw "Error";
  }

  return context;
};

function TabMenuItem({ title, content, id, itemLength, children }: TabMenuItemProps) {
  const width = itemLength ? 100 / itemLength : 100;
  return (
    <TabMenuItemContext.Provider value={{ id, title, content }}>
      <div
        css={css`
          width: ${width}%;
        `}
      >
        {children}
      </div>
    </TabMenuItemContext.Provider>
  );
}

function TabMenuTrigger() {
  const { value, setter } = useTabMenuContext();
  const { id, title } = useTabMenuItemContext();
  const isActive = value === id;

  return (
    <div
      css={css`
        padding: 8px 12px;
        box-sizing: border-box;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;

        &:hover {
          background-color: ${!isActive && colors.secondary};
          border-bottom: ${!isActive && `2px solid ${colors.outline}`};
          color: ${isActive ? colors.gray900 : colors.gray900};
          transition: background 0.25s ease-in-out;
        }
        background-color: ${isActive && colors.gray200};
        border-bottom: ${isActive && `2px solid ${colors.primary}`};
        color: ${isActive ? colors.gray900 : colors.gray600};
        cursor: pointer;

        font-size: 14px;
      `}
      onClick={() => setter(id)}
    >
      {title}
    </div>
  );
}

function TabMenuContent() {
  const { value } = useTabMenuContext();
  const { id, content } = useTabMenuItemContext();
  const Component = content;
  const isActive = value === id;

  return (
    <div
      css={css`
        position: absolute;
        width: 100%;
        left: 0;
        top: 34px;
        padding: ${isActive && `20px 20px`};
        box-sizing: border-box;
        background-color: ${colors.gray200};

        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;

        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

        font-size: 12.5px;
        // display: ${isActive ? "block" : "none"};
        max-height: ${!isActive && 0}px;
        overflow: hidden;
      `}
    >
      <Component />
    </div>
  );
}

const Root = TabMenuRoot;
const Item = TabMenuItem;
const Trigger = TabMenuTrigger;
const Content = TabMenuContent;

export { Root, Item, Trigger, Content };
