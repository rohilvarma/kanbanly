"use client";

import AuthButton from "./AuthButton";
import useAuthStore from "@/lib/authStore";

const NavbarButtons = () => {
  const { isAuthenticated } = useAuthStore();
  return (
    <div className="">
      {isAuthenticated ? (
        <AuthButton btnMessage="Log Out" />
      ) : (
        <div className="flex items-center justify-center gap-2">
          <AuthButton variant="ghost" btnMessage="Register" />
          <AuthButton btnMessage="Log In" />
        </div>
      )}
    </div>
  );
};

export default NavbarButtons;
