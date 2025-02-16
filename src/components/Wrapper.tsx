import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return <div className="px-4 sm:px-10">{children}</div>;
};

export default Wrapper;
