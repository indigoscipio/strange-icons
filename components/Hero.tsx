import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-[url('/images/si-hero.png')] bg-right-bottom bg-no-repeat bg-contain">
      <div className="container px-4 md:mx-auto py-48 md:py-64">
        <div className="flex flex-col gap-12 items-left text-left">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            Strange UI Icon Libraries
          </h1>
          <p className="text-lg md:text-xl font-normal">
            Get your modern healthcare icons, now!
          </p>
          <ul className="flex flex-col md:flex-row flex-wrap gap-4 uppercase font-semibold tracking-wide text-sm">
            <li className="mb-2">✔ Pixel Perfect</li>
            <li className="mb-2">✔ Optimized</li>
            <li className="mb-2">✔ Made by Pro's</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
