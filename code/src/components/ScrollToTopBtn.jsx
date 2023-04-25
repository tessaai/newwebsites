import { useState, useEffect } from "react";

function scrollToTop(smooth) {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
}

export default function ScrollToTopBtn({
  top = 20,
  className = "",
  smooth = true,
  component = "",
  viewBox = "0 0 24 24",
  svgPath = "M8.12 14.71 12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71a.9959.9959 0 0 0-1.41 0L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.38 1.03.39 1.42 0z",
  width = "28",
  height = "28",
  ...props
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= top);
    };
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [top]);

  return (
    <>
      {visible && (
        <button
          className={`${className} fixed bottom-10 right-10 rounded-full bg-white dark:bg-slate-800 dark:border-gray-500 dark:border-[1.5px] shadow-lg p-2`}
          onClick={() => scrollToTop(smooth)}
          {...props}
        >
          {component || (
            <svg
              width={width}
              height={height}
              className="transition ease-in duration-200 fill-black dark:fill-white dark:hover:fill-blue-300 hover:fill-blue-900"
              viewBox={viewBox}
            >
              <path d={svgPath} />
            </svg>
          )}
        </button>
      )}
    </>
  );
}
