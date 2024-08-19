const AboutPage = () => {
  return (
    <div className="p-8">
      <header className="mb-6">
        <h1 className="text-3xl font-bold">About Us</h1>
      </header>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="mt-2">
          Our mission is to deliver innovative and high-quality solutions that
          drive success for our clients. We strive to stay at the forefront of
          technology, continually adapting and evolving to meet the needs of a
          dynamic market.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Team</h2>
        <p className="mt-2">
          Our team is composed of skilled professionals with a passion for
          technology and a commitment to excellence. Each member brings a unique
          set of skills and experiences to the table, working collaboratively to
          achieve our goals and exceed client expectations.
        </p>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Our Values</h2>
        <ul className="mt-2 list-disc list-inside">
          <li className="mb-2">
            Integrity: We uphold the highest standards of honesty and
            transparency.
          </li>
          <li className="mb-2">
            Innovation: We embrace change and continuously seek new ways to
            improve.
          </li>
          <li className="mb-2">
            Customer Focus: We prioritize our clients needs and work to deliver
            exceptional results.
          </li>
          <li className="mb-2">
            Collaboration: We believe in the power of teamwork and foster a
            supportive work environment.
          </li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="mt-2">
          If you have any questions or would like to learn more about what we
          do, feel free to reach out to us at{" "}
          <a href="mailto:info@example.com" className="text-blue-500">
            info@example.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
