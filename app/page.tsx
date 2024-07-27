import { oswald } from "@/lib/fonts";
export default function Home() {
  return (
    <main className="">
      <div className="my-32">
        <h1 className="text-5xl">
          Welcome to{" "}
          <span className={`${oswald.className} underline`}>Kanbanly</span> ✨✨
        </h1>
        <p className="mt-16 text-neutral-600 text-right">
          Stop thinking, start doing <br />
          <cite>- Rohil Varma (me)</cite>
        </p>
      </div>
    </main>
  );
}
