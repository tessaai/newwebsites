import { Link } from "react-router-dom";
import HeaderLinks from "./HeaderLinks";
import Switcher from "../../../components/Switcher";

function Header({ onOpenNav }) {
  return (
    <>
      <header className="transition-transform ease-in duration-200 sticky top-0 bg-white dark:bg-slate-800 dark:text-white flex gap-x-4 md:divide-x  items-center p-4 shadow dark:shadow-none dark:border-b-[1.5px] dark:border-b-gray-500">
        <h1 className="transition ease-in duration-200 hover:text-blue-900 dark:hover:text-blue-300 text-sm xs:grow uppercase tracking-widest font-bold">
          <Link to="/about" className="text-sm uppercase tracking-widest">
            pro
          </Link>
        </h1>
        <HeaderLinks />
        <Switcher />
        <button onClick={onOpenNav} className="md:hidden">
          ☰
        </button>
      </header>
    </>
  );
}

export default Header;
