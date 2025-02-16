import { FC } from "react";

interface PremiumFeaturesProps {
  handleClick: () => void;
}

const PremiumFeatures: FC<PremiumFeaturesProps> = ({ handleClick }) => {
  return (
    <div className="mt-16 bg-white rounded-md px-4 py-12">
      <div className="grid md:grid-cols-2 justify-center items-center gap-10 max-w-7xl mx-auto">
        <div className="max-md:text-center">
          <h2 className="md:text-4xl text-3xl font-extrabold mb-6">
            Unlock Premium Features
          </h2>
          <p>
            Veniam proident aute magna anim excepteur et ex consectetur velit
            ullamco veniam minim aute sit. Elit occaecat officia et laboris
            Lorem minim. Officia do aliqua adipisicing ullamco in.
          </p>
          <button
            onClick={handleClick}
            type="button"
            className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800 mt-10"
          >
            Try it today
          </button>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Premium Benefits"
            className="w-full mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default PremiumFeatures;
