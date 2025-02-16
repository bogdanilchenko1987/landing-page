import { RefObject } from "react";
import PremiumFeatures from "./PremiumFeatures";
import { features } from "../../consts";

interface FeaturesProps {
  scrollToSection: (ref: RefObject<HTMLDivElement>, section: string) => void;
  formSectionRef: RefObject<HTMLDivElement | null>;
  ref: RefObject<HTMLDivElement | null>;
}

const Features = ({ scrollToSection, formSectionRef, ref }: FeaturesProps) => {
  return (
    <>
      <div ref={ref} className="mt-16 max-w-7xl mx-auto">
        <div className="mb-16 max-w-2xl text-center mx-auto">
          <h2 className="md:text-4xl text-3xl font-extrabold mb-6">
            Our Features
          </h2>
          <p className="mt-6">
            Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad
            consequat id. Dolore et sint mollit in nisi tempor culpa
            consectetur.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 max-md:max-w-lg mx-auto gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-6 border shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center">
                {feature.svg}
                <h3 className="text-xl font-semibold">{feature.name}</h3>
              </div>
              <p className="mt-2">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>

      <PremiumFeatures
        handleClick={() =>
          scrollToSection(
            formSectionRef as RefObject<HTMLDivElement>,
            "formSection"
          )
        }
      />
    </>
  );
};

export default Features;
