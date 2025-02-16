import { clients } from "../consts";

const Clients = () => {
  return (
    <div className="mt-16">
      <div className="mb-16 text-center">
        <h2 className="md:text-4xl text-3xl font-extrabold">
          What our happy clients say
        </h2>
      </div>
      <div className="grid md:grid-cols-3 md:py-16 gap-8 max-w-7xl max-md:max-w-lg mx-auto relative">
        <div className="bg-blue-100 lg:max-w-[70%] max-w-[80%] h-full w-full inset-0 mx-auto rounded-3xl absolute max-md:hidden"></div>
        {clients.map((client, index) => (
          <div
            key={index}
            className="h-auto lg:p-6 p-4 rounded-md mx-auto bg-white relative max-md:shadow-md"
          >
            <div>
              <h4 className="whitespace-nowrap font-semibold mt-2">
                {client.name}
              </h4>
              <p className="mt-1 text-xs">Founder of {client.founder}</p>
            </div>
            <div className="mt-4">
              <p>{client.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
