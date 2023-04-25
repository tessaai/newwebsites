import { Link } from "react-router-dom";
import avatarUrl from "../../../assets/images/avatar.jfif";

export default function Profile() {
  return (
    <section className="pb-10 flex flex-col gap-y-6 items-center">
      <Link to="/about">
        <img className="rounded-full w-40" src={avatarUrl} alt="profile" />
      </Link>
      <h1 className="text-lg md:text-2xl uppercase tracking-widest font-bold">
        Aidos Kanapyanov
      </h1>
      <p className="transition ease-in duration-200 text-xs lg:text-sm font-thin tracking-widest uppercase decoration-dotted decoration-1 underline underline-offset-4 hover:no-underline hover:text-blue-900 dark:hover:text-blue-300">
        <a href="mailto:aidos.kanapyanov@alumni.nu.edu.kz">
          aidos.kanapyanov@alumni.nu.edu.kz
        </a>
      </p>
    </section>
  );
}
