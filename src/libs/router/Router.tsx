import { AccordionPage } from "pages/AccordionPage";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from "react-router-dom";
function Router() {
  return (
    <Routes>
      <Route path={"/component/accordion"} element={<AccordionPage />} />
    </Routes>
  );
}

export default Router;
