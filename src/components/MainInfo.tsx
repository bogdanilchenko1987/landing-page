import { RefObject } from "react";

interface MainInfoProps {
  scrollToSection: (ref: RefObject<HTMLDivElement>, section: string) => void;
  formSectionRef: RefObject<HTMLDivElement | null>;
}

const MainInfo = ({ scrollToSection, formSectionRef }: MainInfoProps) => {
  return (
    <div className="relative">
      <div className="px-4 sm:px-10">
        <div className="mt-16 max-w-4xl mx-auto text-center relative z-10">
          <h1 className="md:text-6xl text-4xl font-extrabold mb-6 md:!leading-[75px]">
            Build Landing Pages with Typeform Integration
          </h1>
          <p className="text-base">
            Embark on a gastronomic journey with our curated dishes, delivered
            promptly to your doorstep. Elevate your dining experience today.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="mt-10">
            <button
              onClick={() =>
                scrollToSection(
                  formSectionRef as RefObject<HTMLDivElement>,
                  "formSection"
                )
              }
              className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800"
            >
              Get started today
            </button>
          </div>
        </div>
        <hr className="my-12 border-gray-300" />
      </div>
      {/* <img
        src="https://readymadeui.com/bg-effect.svg"
        className="absolute inset-0 w-full h-full"
      /> */}
    </div>
  );
};

export default MainInfo;
