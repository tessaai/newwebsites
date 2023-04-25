import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../base/header";
import Navbar from "../base/navbar";

export default function BaseLayout() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header onOpenNav={() => setOpen(true)} />
      <Navbar openNav={open} onCloseNav={() => setOpen(false)} />
      <Outlet />
    </>
  );
}
