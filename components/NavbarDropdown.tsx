"use client";
/**
 * Renders a dropdown menu component for the Navbar.
 *
 * @return {JSX.Element} The rendered dropdown menu component.
 */
import useAuthStore from "@/lib/authStore";
import { IoMenuSharp } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AuthButton from "./AuthButton";

const NavbarDropdown = () => {
  const { isAuthenticated, authenticate, logout } = useAuthStore();
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <IoMenuSharp size={35} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-6 text-center">
        <DropdownMenuLabel>
          My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {isAuthenticated ? (
            <AuthButton variant="ghost" btnMessage="Log Out" />
        ) : (
          <div className="flex flex-col gap-2">
            <AuthButton variant="ghost" btnMessage="Register" />
            <AuthButton btnMessage="Log In" />
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavbarDropdown;
