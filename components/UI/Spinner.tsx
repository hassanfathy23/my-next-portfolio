import { Icon } from "@iconify/react";

type AppProps = {
  classes: string;
};

export default function Spinner({ classes }: AppProps) {
  return (
    <div className="w-full flex flex-col items-center justify-center">
    <div className={`${classes} w-10/12 flex flex-col justify-center items-center rounded-md`}>
      <Icon icon="fluent:spinner-ios-20-regular" color="#508BEB" width='100' height='100' className="animate-spin" />
    </div>
    </div>
  );
}
