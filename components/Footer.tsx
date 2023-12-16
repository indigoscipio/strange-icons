import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-footer-bg bg-right bg-no-repeat bg-auto bg-gray-900 text-white relative rounded-tl-2xl">
      <div
        id="support"
        className="space-y-24 items-start container px-4 md:mx-auto flex flex-col md:flex-row py-24"
      >
        {/* Col */}
        <div
          className="flex
         md:pr-16 lg:pr-32 xl:pr-64 flex-col gap-16 lg:basis-2/3"
        >
          <h2 className="font-bold text-2xl tracking-tight">strangeicons</h2>
          <h3 className="text-2xl font-normal">
            strangeicons is a collaborative design project designed to improve
            user interfaces within the biotech and healthcare space. Made by
            Samuel Oktavianus + Emilia "b001ean" Destroyer
          </h3>
          <Link href="#section-icon-display">
            <span className="tracking-tight text-7xl">Browse All Icons ↗</span>
          </Link>
          <span className="uppercase tracking-widest text-neutral-400 font-semibold">
            Copyright 2024© strangeicons
          </span>
        </div>

        <div className="flex flex-col lg:basis-1/3 lg:ml-32 gap-16">
          <ul className="text-xl flex flex-col gap-8 items-start">
            <Link href="#">
              <li>Download All Icons</li>
            </Link>
            <Link href="#">
              <li>Figma Community</li>
            </Link>
            <Link href="#">
              <li>Github</li>
            </Link>
            <Link href="#">
              <li>Contact Us</li>
            </Link>
          </ul>

          <ul className="flex gap-2">
            <Link href="#">
              <li className="w-10 h-10 border border-white flex items-center justify-center rounded-tl-xl">
                🏀
              </li>
            </Link>
            <Link href="#">
              <li className="w-10 h-10 border border-white flex items-center justify-center rounded-tl-xl">
                🧠
              </li>
            </Link>

            <Link href="#">
              <li className="w-10 h-10 border border-white flex items-center justify-center rounded-tl-xl">
                📷
              </li>
            </Link>

            <Link href="#">
              <li className="w-10 h-10 border border-white flex items-center justify-center rounded-tl-xl">
                🕸
              </li>
            </Link>
          </ul>
        </div>

        <Link href="#header">
          <button className="absolute bottom-4 right-0 transform -translate-x-1/2 bg-white text-black p-4 rounded-br-2xl">
            🔼
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
