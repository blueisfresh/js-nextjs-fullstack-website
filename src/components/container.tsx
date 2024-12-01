import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="max-w-[1300px] mx-auto bg-white min-h-screen flex flex-col">
      {children}
    </div>
  );
}
