"use client";

import { Button } from "./ui/button";
import useAuthStore from "@/lib/authStore";
import { FaChevronRight } from "react-icons/fa";
import { useRouter } from "next/navigation";

type ButtonType = {
  variant?: "secondary" | "outline" | "ghost";
  btnMessage: string;
};

const AuthButton = ({ variant, btnMessage }: ButtonType) => {
  const { authenticate, logout, isAuthenticated } = useAuthStore();

  const router = useRouter()

  const handleClick = () => {
    switch (btnMessage.toUpperCase()) {
      case "REGISTER": {
        authenticate();
        router.push("/home")
        break;
      }
      case "LOG IN": {
        authenticate();
        router.push("/home")
        break;
      }
      case "LOG OUT": {
        logout();
        router.push("/")
        break;
      }
    }
  };
  return (
    <Button variant={variant} onClick={handleClick}>
      {btnMessage}
      {variant === "secondary" && <FaChevronRight className="ml-1" />}
    </Button>
  );
};

export default AuthButton;
