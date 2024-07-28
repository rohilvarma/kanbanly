"use client";

import { Button } from "./ui/button";
import useAuthStore from "@/lib/authStore";
import { FaChevronRight } from "react-icons/fa";

type ButtonType = {
  variant?: "secondary" | "outline" | "ghost";
  btnMessage: string;
};

const AuthButton = ({ variant, btnMessage }: ButtonType) => {
  const { authenticate, logout, isAuthenticated } = useAuthStore();


  const handleClick = () => {
    switch(btnMessage.toUpperCase()) {
      case "REGISTER": {
        authenticate()
        break;
      }
      case "LOG IN": {
        authenticate();
        break;
      }
      case "LOG OUT":
        logout();
        break;
    }
  };
  return (
    <Button variant={variant} onClick={handleClick}>
      {btnMessage}
      {
        variant === "secondary" && <FaChevronRight className="ml-1" />
      }
    </Button>
  );
};

export default AuthButton;
