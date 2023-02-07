import { ItemButton } from "./components/buttons/item-button/item-button";

import './styles/reset.css';
import './styles/variables.css';
import './styles/style.css';
import { ProfessionalList } from "./pages/professional/professional-list/professional-list";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProfessionalEdit } from "./pages/professional/professional-edit/professional-edit";

export default function App() {

  const pages = [
    { path: '/p', element: <ProfessionalList /> },
    { path: '/p/edit', element: <ProfessionalEdit /> }
  ]

return (
  <div className="background">
    <Router>
      <Routes>
        {pages.map(page => {
          return (
            <Route key={pages.indexOf(page)} path={page.path} element={page.element} ></Route>
          )
        })}
      </Routes>
    </Router>
  </div>
);
}