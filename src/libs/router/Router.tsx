import { AccordionPage } from "pages/AccordionPage";
import { StudyEventPage } from "pages/StudyEventPage";
import { TabMenuPage } from "pages/TabMenuPage";
import { TooltipPage } from "pages/TooltipPage";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
function Router() {
  return (
    <Routes>
      <Route path={"/component/accordion"} element={<AccordionPage />} />
      <Route path={"/component/tooltip"} element={<TooltipPage />} />
      <Route path={"/component/tabmenu"} element={<TabMenuPage />} />
      <Route path={"/study/event"} element={<StudyEventPage />} />
    </Routes>
  );
}

export default Router;
