import { RefObject, useState } from "react";

interface HeaderProps {
  scrollToSection: (ref: RefObject<HTMLDivElement>) => void;
  refs: {
    featuresRef: RefObject<HTMLDivElement | null>;
    aboutRef: RefObject<HTMLDivElement | null>;
    subscriptionsRef: RefObject<HTMLDivElement | null>;
    formSectionRef: RefObject<HTMLDivElement | null>;
  };
  ref: RefObject<HTMLDivElement | null>;
}

const Header = ({ scrollToSection, refs, ref }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nav = [
    { name: "Home", ref: null },
    { name: "Features", ref: refs.featuresRef },
    { name: "Pricing", ref: refs.subscriptionsRef },
    { name: "Form", ref: refs.formSectionRef },
    { name: "About", ref: refs.aboutRef },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header ref={ref} className="py-4 px-4 sm:px-10 z-50 min-h-[70px]">
      <div className="relative flex flex-wrap items-center gap-4">
        <a href="/">
          <p className="text-[18px] font-bold hover:text-[#2563EB]">
            Land<span className="text-[#2563EB] hover:text-black">Page</span>
          </p>
        </a>

        {/* Navigation Menu */}
        <div
          className={`lg:!block ${
            isMenuOpen
              ? "fixed inset-0 z-50 bg-white shadow-md"
              : "max-lg:hidden"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"></path>
              <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"></path>
            </svg>
          </button>

          <ul className="lg:ml-12 lg:flex gap-x-6 max-lg:space-y-3 max-lg:p-6">
            {nav.map((item, index) => (
              <li
                onClick={(e) => {
                  e.preventDefault();
                  if (item.ref?.current) {
                    scrollToSection(item.ref as RefObject<HTMLDivElement>);
                  }
                  setIsMenuOpen(false);
                }}
                key={index}
                className="max-lg:border-b max-lg:py-3 px-3"
              >
                <a
                  href=""
                  className="hover:text-blue-600 block font-semibold transition-all"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Buttons */}
        <div className="flex ml-auto">
          <button onClick={toggleMenu} className="lg:hidden ml-7">
            <svg
              className="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
