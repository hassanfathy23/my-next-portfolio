import classes from "./AnimatedBg.module.css";

type AppProps = {
  children: React.ReactNode
}

function AnimatedBg({ children }: AppProps) {
  return (
    <div className={`${classes.body} h-[800px] w-full relative overflow-hidden`}>
      {children}
      <div className={`${classes.wave} overflow-hidden`}></div>
      <div className={`${classes.wave} overflow-hidden`}></div>
      <div className={`${classes.wave} overflow-hidden`}></div>
    </div>
  );
}

export default AnimatedBg;
