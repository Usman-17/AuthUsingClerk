import { useUser } from "@clerk/clerk-react";

const HomePage = () => {
  const { user } = useUser();
  return (
    <div className="p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome {user?.fullName}</h1>
        <p className="text-lg text-gray-600">
          Discover our latest products and services that can help you achieve
          your goals.
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-4 border rounded shadow-md">
            <img
              src=""
              alt="Product 1"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Product 1</h3>
            <p className="text-gray-600">A brief description of Product 1.</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <img
              src=""
              alt="Product 2"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Product 2</h3>
            <p className="text-gray-600">A brief description of Product 2.</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <img
              src=""
              alt="Product 3"
              className="w-full h-40 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Product 3</h3>
            <p className="text-gray-600">A brief description of Product 3.</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 mb-4">
          We offer a range of services tailored to meet your needs. Whether
          you&apos;re looking for professional advice or high-quality products,
          we&apos;ve got you covered.
        </p>
        <ul className="list-disc list-inside pl-5">
          <li className="mb-2">
            Service 1: Detailed description of Service 1.
          </li>
          <li className="mb-2">
            Service 2: Detailed description of Service 2.
          </li>
          <li className="mb-2">
            Service 3: Detailed description of Service 3.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Testimonials</h2>
        <div className="flex flex-col space-y-6">
          <blockquote className="p-6 border rounded shadow-md">
            <p className="text-lg text-gray-600 mb-4">
              This is the best service I have ever used. Highly recommend to
              everyone
            </p>
            <footer className="text-gray-800 font-semibold">
              - Customer 1
            </footer>
          </blockquote>
          <blockquote className="p-6 border rounded shadow-md">
            <p className="text-lg text-gray-600 mb-4">
              An excellent experience from start to finish. Will definitely use
              again.
            </p>
            <footer className="text-gray-800 font-semibold">
              - Customer 2
            </footer>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
