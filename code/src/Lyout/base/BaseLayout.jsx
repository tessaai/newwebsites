import { useState } from "react";
import { Outlet } from "react-router-dom";
import ScrollToTopBtn from "../../components/ScrollToTopBtn";
import Header from "./header";
import Navbar from "./navbar";
import Sidebar from "./sidebar/Sidebar";

export default function BaseLayout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header onOpenNav={() => setOpen(true)} />
      <Navbar openNav={open} onCloseNav={() => setOpen(false)} />
      <div className="flex md:flex-row-reverse flex-col divide-y-2 md:divide-y-0">
        <article className="md:w-3/4 bg-white dark:bg-slate-800 dark:text-white shadow my-4 md:m-10">
          <Outlet />
        </article>
        <Sidebar />
      </div>
      <ScrollToTopBtn />
    </>
  );
}
