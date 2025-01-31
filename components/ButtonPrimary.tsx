import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const ButtonPrimary = ({ children, ...rest }: Props) => {
  return (
    <div
      {...rest}
      className="flex flex-row items-center justify-center gap-2 cursor-pointer text-neutral bg-brandPrimary text-center py-3 rounded-lg font-bold hover:bg-brandPrimary/80"
    >
      {children}
    </div>
  );
};
