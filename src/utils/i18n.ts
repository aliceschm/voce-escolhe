import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      hero: {
        fields: {
          title: "Welcome to Choose Option.",
          subtitle:
            "It's not really a game. It's just humans asking the stars what to do when they can't decide on their own.",
          startButton: "Start",
          instructionsButton: "Instructions",
        },
      },
      iCard: {
        fields: {
          text: "How to ask the universe for help:",
          button: "Start",
          steps: [
            "Choose the number of participants",
            "Each participant ranks their options by priority",
            "The app picks a result based on a match, or randomly if no match is found",
          ],
        },
      },
      pCard: {
        fields: {
          text: "Choose your options from 1 to 5 by priority order",
          nameLabel: "Name:",
          namePlaceholder: "Enter your name",
          optionLabel: "Option {{number}}:",
          optionPlaceholder: "Enter option {{number}}",
          button: "Submit",
        },
      },
      rCard: {
        fields: {
          title: "Match Results",
          text: [
            "You thought, hesitated… but fate was already laughing at you. The chosen option is:",
            "After a thorough scientific analysis, we reached:",
            "We consulted the mystical forces, and they whispered (loudly):",
            "You asked for help… and you got it. The final decision is:",
            "We spun the cosmic wheel. It landed on:",
            "The universe played 'eeny, meeny, miny, moe' and said:",
            "The oracle of randomness answered without a second thought:",
            "We ran highly complex calculations (and guessed a little). The result is:",
            "We let luck decide… and it was in a good mood. The answer is:",
            "And in the most suspicious raffle ever, the winner is:",
          ],
          button: "Restart",
        },
      },
    },
  },
  pt: {
    translation: {
      hero: {
        fields: {
          title: "Bem-vindo ao Choose Option.",
          subtitle:
            "Não é exatamente um jogo. São só pessoas pedindo ajuda às estrelas quando não conseguem decidir sozinhas.",
          startButton: "Começar",
          instructionsButton: "Instruções",
        },
      },
      iCard: {
        fields: {
          text: "Como pedir ajuda ao universo:",
          button: "Iniciar",
          steps: [
            "Escolha a quantidade de participantes",
            "Cada participante organiza suas opções por ordem de prioridade",
            "O app escolhe um resultado com base em match, ou aleatoriamente caso não encontre um match",
          ],
        },
      },
      pCard: {
        fields: {
          text: "Escolha suas opções de 1 a 5 por ordem de prioridade",
          nameLabel: "Nome:",
          namePlaceholder: "Digite seu nome",
          optionLabel: "Opção {{number}}:",
          optionPlaceholder: "Digite a opção {{number}}",
          button: "Submeter",
        },
      },
      rCard: {
        fields: {
          title: "Resultado",
          text: [
            "Você pensou, hesitou… mas o destino já estava rindo de você. A opção escolhida é:",
            "Depois de uma rigorosa análise científica (mentira), chegamos a:",
            "Consultamos as forças místicas, e elas sussurraram (bem alto):",
            "Você pediu ajuda… e recebeu. A decisão final é:",
            "Rodamos a roleta cósmica. Caiu em:",
            "O universo fez 'eeny, meeny, miny, moe’ e disse:",
            "O oráculo do acaso respondeu sem pensar duas vezes:",
            "Fizemos cálculos altamente complexos (e chutamos um pouco). O resultado é:",
            "Deixamos a sorte decidir… e ela estava de bom humor. A resposta é:",
            "E no sorteio mais suspeito do mundo, o vencedor foi:",
          ],
          button: "Recomeçar",
        },
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    debug: true,
    fallbackLng: "pt",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
