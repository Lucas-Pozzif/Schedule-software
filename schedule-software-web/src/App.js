import { ItemButton } from "./components/buttons/item-button/item-button";

import './styles/reset.css';
import './styles/variables.css';
import './styles/style.css';

export default function App() {
  return (
    <div className="App">
      <ItemButton
        title={"Diego defantus"}
        subtitle={["Bonito", "Barbudo", "Bilíngue", "Famoso", "Feio", "divertido"]}
        stages={["Curto", "Médio", "Grande", "Colossal"]}
        from={true}
        duration={[45, 46, 47]}
        value={[44, 45, 46, 47]}
        image={"https://www.saogoncalo.rj.gov.br/wp-content/uploads/2022/09/Diogo-Defante-foto-Divulgacao.jpeg"}
      ></ItemButton>
    </div>
  );
}