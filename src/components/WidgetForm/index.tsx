import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "imagem de um inset",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      source: thoughtImageUrl,
      alt: "imagem de um balao de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

function handleRestartFeedback(){
    setFeedbackType(null);
}


  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep  
        feedbackType={feedbackType}
        onFeedBackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com amor por{" "}
        <a
          className="underline underline-offset-2"
          href="https://github.com/livia128924"
        >
          Livia Silva
        </a>
      </footer>
    </div>
  );
}
