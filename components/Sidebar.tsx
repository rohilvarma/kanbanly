/**
 * Renders the sidebar component.
 *
 * @return {JSX.Element} The rendered sidebar component.
 */


import Link from "next/link";
import SidebarDropdown from "./SidebarDropdown";
import { oswald } from "@/lib/fonts";

const Sidebar = () => {
  return (
    <nav className=" py-4">
      {/* Mobile Navigation View */}
      <section className="flex items-center justify-between">
        <Link href="/" className={`${oswald.className} text-4xl w-full`}>
          Kanbanly
        </Link>
        <SidebarDropdown />
      </section>

      {/* Desktop Navivation View */}
    </nav>
  );
};

export default Sidebar;
