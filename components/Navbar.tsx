/**
 * Renders the Navbar component.
 *
 * @return {JSX.Element} The rendered Navbar component.
 */


import Link from "next/link";
import NavbarDropdown from "./NavbarDropdown";
import { oswald } from "@/lib/fonts";
import AuthButton from "./AuthButton";
import NavbarButtons from "./NavbarButtons";


const Navbar = () => {
  return (
    <nav className="py-4">
      {/* Mobile Navigation View */}
      <section className="flex items-center justify-between sm:hidden">
        <Link href="/" className={`${oswald.className} text-4xl w-full`}>
          Kanbanly
        </Link>
        <NavbarDropdown />
      </section>

      {/* Desktop Navivation View */}
      <section className="hidden w-full sm:flex sm:justify-between sm:items-center">
        <Link href="/" className={`${oswald.className} text-4xl w-full`}>
          Kanbanly
        </Link>
        <NavbarButtons />
      </section>
    </nav>
  );
};

export default Navbar;
