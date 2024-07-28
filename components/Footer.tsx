import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-center text-neutral-500 w-full fixed bottom-4 right-1/2 translate-x-1/2 border-t-2 borderneutral-200 pt-4">
      Made with{" "}
      <Image
        className="inline"
        src={"/favicon.ico"}
        alt="Vercel icon"
        width={20}
        height={20}
      />{" "}
      by <Link className="text-neutral-300" href={"https://rohilvarma.com"}>Rohil Varma</Link>
    </footer>
  );
};

export default Footer;
