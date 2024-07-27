"use client"
/**
 * Renders a dropdown menu component for the sidebar.
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

const SidebarDropdown = () => {
  const { isAuthenticated, authenticate, logout } = useAuthStore();
  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger>
        <IoMenuSharp size={35} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-6">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {isAuthenticated ? (
          <DropdownMenuItem onClick={() => logout()}>Logout</DropdownMenuItem>
        ) : (
          <div className="">
            <DropdownMenuItem onClick={() => authenticate()}>Register</DropdownMenuItem>
            <DropdownMenuItem onClick={() => authenticate()}>Log In</DropdownMenuItem>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SidebarDropdown;
