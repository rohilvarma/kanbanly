/**
 * Renders the Home component, which displays a welcome message and a quote by the author.
 *
 * @return {JSX.Element} The rendered Home component.
 */
import AuthButton from "@/components/AuthButton";
import { oswald } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="sm:min-h-screen sm:flex sm:justify-center sm:items-center">
      <div className="my-32 sm:my-0">
        <h1 className="text-5xl">
          Welcome to{" "}
          <span className={`${oswald.className} underline`}>Kanbanly</span> ✨✨
        </h1>
        <div className="mt-8">
          <AuthButton btnMessage="Get Started" variant="secondary" />
        </div>
        <p className="mt-16 text-neutral-600 text-right">
          Stop thinking, start doing <br />
          <cite>- Rohil Varma (me)</cite>
        </p>
      </div>
    </main>
  );
}
