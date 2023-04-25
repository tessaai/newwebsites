import AboutShort from "./AboutShort";
import Profile from "./Profile";
import Socials from "./Socials";

export default function Sidebar() {
  return (
    <div className="dark:text-white flex flex-col md:w-1/4 divide-y-2 mx-10 py-10">
      <Profile />
      <AboutShort />
      <Socials />
    </div>
  );
}
