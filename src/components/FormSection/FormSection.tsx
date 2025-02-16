import { RefObject } from "react";
import Form from "./Form";
import FormEmail from "./FormEmail";
import FormSocials from "./FormSocials";

interface FormProps {
  ref: RefObject<HTMLDivElement | null>;
}

const FormSection = ({ ref }: FormProps) => {
  return (
    <div ref={ref} className="bg-white mt-16 px-4 py-12">
      <div className="grid sm:grid-cols-2 items-center gap-16 my-6 mx-auto max-w-5xl">
        <div>
          <h1 className="md:text-4xl text-3xl font-extrabold">Let's Talk</h1>
          <p className="mt-6">
            Have some big idea or brand to develop and need help? Then reach out
            we'd love to hear about your project and provide help.
          </p>
          <FormEmail />
          <FormSocials />
        </div>
        <Form />
      </div>
    </div>
  );
};

export default FormSection;
