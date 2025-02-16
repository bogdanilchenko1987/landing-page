import { ChangeEvent, FormEvent, useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, email, message } = formData;
    if (!name || !email || !message) return alert("Please fill all fields");
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitted(true);
  };

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      {isSubmitted ? (
        <div className="text-center rounded border shadow-md p-8 text-green-500 text-xl ">
          <p>
            ✔ Success!
            <span className="text-black"> Your message has been sent.</span>
          </p>
        </div>
      ) : (
        <form className="ml-auto space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 bg-[#f8f9ff] outline-cyan-900"
            required
            minLength={4}
            maxLength={32}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 bg-[#f8f9ff] outline-cyan-900"
            minLength={4}
            maxLength={32}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={6}
            className="w-full rounded-md px-4 bg-[#f8f9ff] pt-3 outline-cyan-900"
            required
            minLength={4}
          ></textarea>
          <button
            type="submit"
            className="w-full mt-6 px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800"
          >
            Send
          </button>
        </form>
      )}
    </>
  );
};

export default Form;
