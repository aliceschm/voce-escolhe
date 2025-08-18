import { Header } from "./components/Header";
import { Game } from "./pages/Game";
import Galaxy from "./components/Galaxy";

export default function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Fundo Galaxy fixo */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <Galaxy
          mouseRepulsion={true}
          mouseInteraction={true}
          density={1.5}
          glowIntensity={0.5}
          saturation={0.8}
          hueShift={240}
        />
      </div>

      {/* Conteúdo do site acima do fundo */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <main>
          <Game />
        </main>
      </div>
    </div>
  );
}
