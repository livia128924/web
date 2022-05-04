import { ChatTeardropDots } from "phosphor-react";
import { useState } from "react";



export function Widget() {
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)
  
    return (
    <div className="absolute bottom-5 right-5">
        <p>Hello!</p>
      <button className="bg-brand-500 rounded-full 
      text-white px-3 h-12 flex items-center group">
        <ChatTeardropDots className="w-6 h-6 " weight="regular" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
            <span className="pl-2">
            Feedback
            </span>
            </span>
      </button>
    </div>
  );
}
