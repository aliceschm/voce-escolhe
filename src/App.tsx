import "./styles/themes.css";
import Card from "./components/Card";
import { useCardState } from "./hooks/useCardState";

function App() {
  const { name, setName, options, updateOption } = useCardState();
  return (
    <Card
      name={name}
      options={options}
      onChangeName={setName}
      onChangeOption={updateOption}
      nameLabel="Nome"
      namePlaceholder="Digite seu nome"
      optionLabel={(i) => `Opção ${i + 1}`}
      optionPlaceholder={(i) => `Digite a opção ${i + 1}`}
    />
  );
}

export default App;
