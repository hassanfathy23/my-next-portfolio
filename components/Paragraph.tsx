import { AnimationOnScroll } from "react-animation-on-scroll";

type AppProps = {
  header: string;
  paragraph: string;
  animate?: boolean;
  secondPar?: string;
};

function Paragraph({ header, paragraph, animate, secondPar }: AppProps) {
  if (animate) {
    return (
      <AnimationOnScroll animateIn="animate-zoomIn" animateOnce>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl dark:text-gray-400 font-medium">{header}</h2>
          <p className="text-gray-600 dark:text-gray-500 text-lg lowercase animate-[fromTopToBottom_.3s_.1s]">
            {paragraph}
          </p>
          {secondPar && (
            <p className="text-gray-600 dark:text-gray-500 text-lg lowercase animate-[fromTopToBottom_.3s_.1s]">
              {secondPar}
            </p>
          )}
        </div>
      </AnimationOnScroll>
    );
  }
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-2xl dark:text-gray-400 font-medium animate-fromTopToBottom">
        {header}
      </h2>
      <p className="text-gray-600 dark:text-gray-500 text-lg lowercase animate-[fromTopToBottom_.3s_.1s]">
        {paragraph}
      </p>
      {secondPar && (
            <p className="text-gray-600 dark:text-gray-500 text-lg lowercase animate-[fromTopToBottom_.3s_.1s]">
              {secondPar}
            </p>
          )}
    </div>
  );
}

export default Paragraph;
