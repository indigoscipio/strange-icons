import Link from "next/link";

const Nav = () => {
  return (
    <header id="header" className="rounded-br-2xl border border-black">
      <nav className="flex flex-row items-center justify-between container mx-auto p-4">
        <div className="flex items-center">
          <h1 className="font-bold text-2xl tracking-tight">strangeicons</h1>
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
