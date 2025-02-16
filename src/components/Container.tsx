import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="max-w-[1920px] mx-auto">
      <div className=" bg-[#f8f9ff] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-black text-[15px]">
        {children}
      </div>
    </div>
  );
};

export default Container;
