import classes from "./AnimatedBg.module.css";

function AnimatedBg({ children }) {
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
