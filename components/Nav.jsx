import Link from "next/link";

const Nav = () => {
  return (
    <header id="header" className="rounded-br-3xl border border-black">
      <nav className="flex flex-row items-center justify-between container mx-auto p-2">
        <div className="flex items-center">
          <Link href="/">
            <img
              width="160"
              src="icons/website/strangeicons-logo-black.svg"
              alt=""
            />
          </Link>
        </div>

        <div className="md:flex items-center">
          <Link href="#section-icon-display">
            <button className="btn-primary">Explore Icons</button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
