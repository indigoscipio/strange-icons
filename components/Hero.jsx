const Hero = () => {
  return (
    <section className="bg-hero-bg bg-right-bottom bg-no-repeat bg-cover">
      <div className="container px-4 md:mx-auto py-48 md:py-64">
        <div className="w-full sm:w-1/2 flex flex-col gap-16 items-left text-left">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Strange UI Icon Libraries
          </h1>
          <p className="text-xl  md:text-2xl font-normal">
            Streamline your healthcare and biotech projects with our curated
            collection of over <b>3,000+</b> UI icons! 🏥
          </p>
          <ul className="flex flex-wrap flex-row flex-wrap gap-4 uppercase font-semibold tracking-wide text-md">
            <li className="border border-black p-4 rounded-bl-2xl mb-2">
              <img
                width="32"
                height="32"
                className="mb-2"
                src="/icons/website/pixel-grid.svg"
                alt=""
              />
              Pixel Perfect
            </li>
            <li className="border border-black p-4 rounded-bl-2xl mb-2">
              <img
                width="32"
                height="32"
                src="/icons/website/gear.svg"
                alt=""
                className="mb-2"
              />
              Optimized
            </li>
            <li className="border border-black p-4 rounded-bl-2xl mb-2">
              <img
                width="32"
                height="32"
                src="/icons/website/arrow-update.svg"
                alt=""
                className="mb-2"
              />
              Cohesive
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
