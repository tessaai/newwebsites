import { useEffect } from "react";

export default function Overlay({ openNav }) {
  useEffect(() => {
    if (!openNav) {
      setTimeout(() => {
        document.querySelector("#overlay").classList.add("-z-10");
      }, 200);
    } else {
      document.querySelector("#overlay").classList.remove("-z-10");
    }
  }, [openNav]);

  return (
    <div
      id="overlay"
      className={`${
        openNav ? "bg-black/60" : "bg-black/0"
      } transition ease-in duration-200 inset-0 fixed`}
    />
  );
}
