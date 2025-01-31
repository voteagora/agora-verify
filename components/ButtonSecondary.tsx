import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ButtonSecondary = ({ children, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className="flex flex-row items-center justify-center gap-2 cursor-pointer text-primary text-center border border-line py-3 rounded-lg font-bold hover:bg-tertiary/10"
    >
      {children}
    </div>
  );
};
