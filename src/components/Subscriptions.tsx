import { RefObject } from "react";
import { subscriptions } from "../consts";

interface SubscriptionsProps {
  ref: RefObject<HTMLDivElement | null>;
}

const Subscriptions = ({ ref }: SubscriptionsProps) => {
  return (
    <div ref={ref} className="mt-16 max-w-7xl mx-auto">
      <div className="text-center">
        <h2 className="md:text-4xl text-3xl font-extrabold">
          Choose a Subscription
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 mt-16 max-md:max-w-lg max-md:mx-auto">
        {subscriptions.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded sm:p-6 p-4 border shadow-md transition-all hover:bg-[#2563EB] "
          >
            <div>
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <p className="mt-2">{plan.description}</p>
              <div className="mt-6">
                <h2 className="text-4xl font-semibold">
                  {plan.price}
                  <span className="text-gray-500 ml-2 text-[15px]">
                    {plan.period}
                  </span>
                </h2>
                <button
                  type="button"
                  className="w-full mt-6 px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800"
                >
                  Get Started
                </button>
              </div>
              <div className="mt-6">
                <h4 className="text-base font-bold mb-4">Plan Includes</h4>
                <ul className="space-y-5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        className="mr-4 fill-green-500 "
                        viewBox="0 0 24 24"
                      >
                        <path d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
