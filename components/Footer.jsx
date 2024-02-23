import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-footer-bg bg-right bg-no-repeat bg-auto bg-gray-900 text-white relative rounded-tr-3xl">
      <div
        id="support"
        className="space-y-24 items-start container px-4 md:mx-auto flex flex-col md:flex-row py-24"
      >
        {/* Col */}
        <div
          className="flex
         md:pr-16 lg:pr-32 xl:pr-64 flex-col gap-16 lg:basis-2/3"
        >
          <Link href="/">
            <img
              className="flex-none"
              width="160"
              src="/icons/website/strangeicons-logo-white.svg"
              alt=""
            />
          </Link>
          <h3 className="text-2xl font-normal">
            strangeicons is a collaborative project designed to improve user
            interfaces within the healthcare and biotech space. Made by Samuel
            Oktavianus + Emilia Lin.
          </h3>
          <Link href="#section-icon-display">
            <span className="tracking-tight text-7xl">Browse Icons  ↗</span>
          </Link>
          <span className="uppercase tracking-widest text-neutral-400 font-semibold">
            Copyright 2024© strangeicons
          </span>
        </div>

        <div className="flex flex-col lg:basis-1/3 lg:ml-32 gap-16">
          <ul className="text-xl flex flex-col gap-8 items-start">
            <Link
              rel="noopener noreferrer"
              href="https://strangehelix.bio/"
              target="_blank"
            >
              <li>Visit Our Store</li>
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.figma.com/@strangehelix"
            >
              <li>Figma Community</li>
            </Link>
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/indigoscipio/strange-icons/issues"
            >
              <li>Icon & Feature Request</li>
            </Link>
            <Link
              rel="noopener noreferrer"
              href="https://strangehelix.bio/contact-us"
              target="_blank"
            >
              <li>Contact Us</li>
            </Link>
          </ul>

          <ul className="flex gap-2">
            <Link
              href="https://www.behance.net/strangehelix"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="w-10 h-10 border border-white flex items-center justify-center rounded-tl-xl">
                <img src="/icons/website/socials-behance.svg" alt="" />
              </li>
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/strangehelix"
            >
              <li className="w-10 h-10 border border-white flex items-center justify-center rounded-tl-xl">
                <img src="/icons/website/socials-dribbble.svg" alt="" />
              </li>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/strangehelix.bio/"
            >
              <li className="w-10 h-10 border border-white flex items-center justify-center rounded-tl-xl">
                <img src="/icons/website/socials-instagram.svg" alt="" />
              </li>
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/indigoscipio/strange-icons"
            >
              <li className="w-10 h-10 border border-white flex items-center justify-center rounded-tl-xl">
                <img src="/icons/website/socials-github.svg" alt="" />
              </li>
            </Link>
          </ul>
        </div>

        <Link href="#header">
          <button className="absolute bottom-4 right-4 transform-translate-x-1/2 bg-white text-black p-4 rounded-br-2xl hover:bg-neutral-200">
            <img src="/icons/website/arrow-up.svg" alt="" />
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
