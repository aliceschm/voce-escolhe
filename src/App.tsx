import { Header } from "./components/Header";
import { Game } from "./pages/Game";
//TODO:
//  opcao de cancelar participante. ex escolheu 5 mas no meio do jogo so 4 vao participar
// validacao de inputs, pelo menos uma opcao tem que estar preenchida

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Game />
      </main>
    </>
  );
}
