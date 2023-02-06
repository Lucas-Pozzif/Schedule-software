import { ItemButton } from "./components/buttons/item-button/item-button";

import './styles/reset.css';
import './styles/variables.css';
import './styles/style.css';
import { ProfessionalPage } from "./pages/professional/professional-page/professional-page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {

  const pages = [
    { path: '/p', element: <ProfessionalPage /> }
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