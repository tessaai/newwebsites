import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Animation404 from "../components/Animation404";

export default function Page404() {
  return (
    <>
      <Helmet>
        <title>404 | Aidos Kanapyanov</title>
      </Helmet>
      <div className="dark:text-white flex flex-col items-center justify-center">
        <Animation404 />
        <h1 className="text-6xl font-bold">404</h1>
        <p className="text-2xl font-medium">Page not found.</p>
        <p className="mt-8">
          <Link
            to="/"
            className="transition ease-in duration-200 p-4 text-xs font-medium uppercase border tracking-widest hover:text-blue-900 dark:hover:text-blue-300 hover:border-blue-900 dark:hover:border-blue-300"
          >
            Go back home
          </Link>
        </p>
      </div>
    </>
  );
}
