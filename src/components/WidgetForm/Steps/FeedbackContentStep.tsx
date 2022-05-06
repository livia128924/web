import { ArrowLeft } from "phosphor-react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackContentStepProps{
    feedbackType : FeedbackType;
    onFeedBackRestartRequested: () => void;
}

export function FeedbackContentStep({
    feedbackType,
    onFeedBackRestartRequested
}: FeedbackContentStepProps){
    
const feedbackTypeInfo = feedbackTypes[feedbackType]

    return (
        <>
          <header>
            <button
            onClick={onFeedBackRestartRequested} 
            type="button" 
            className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100">
                <ArrowLeft weight="bold" className="w-4 h-4" />
            </button>

            <span className="text-xl leading-6 flex items-center gab-2">
                <img className="w-6 h-6" src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt}
                
                />
               {feedbackTypeInfo.title}
                </span>
            <CloseButton />
          </header>
    

            <form className="my-4 w-full">
                <textarea 
                className="min-w[304px] w-full min-h-[112px] text-sm placeholder-zinc-100 text-zinc-100 border-zinc-100  bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none   "
                placeholder="Conte oq ta acoteceno"
                ></textarea>
            </form>
        </>
      );
}