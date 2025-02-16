import { RefObject } from "react";

interface FooterProps {
  ref: RefObject<HTMLDivElement | null>;
}

const Footer = ({ ref }: FooterProps) => {
  return (
    <footer ref={ref} className="bg-white px-4 sm:px-10 py-12 mt-16">
      <div className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-5 lg:gap-14 max-lg:gap-8">
        <div className="lg:col-span-2">
          <h4 className="text-xl font-semibold mb-6">About Us</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            gravida, mi eu pulvinar cursus, sem elit interdum mauris.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Services</h4>
          <ul className="space-y-5">
            <li>
              <a href="#" className="hover:text-blue-600">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Mobile Development
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Resources</h4>
          <ul className="space-y-5">
            <li>
              <a href="#" className="hover:text-blue-600">
                Documents
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6">Contacts</h4>
          <ul className="space-y-5">
            <li>
              <a href="#" className="hover:text-blue-600">
                Our Story
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Contacts
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8" />

      <p className="text-center">Copyright © 2025. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
