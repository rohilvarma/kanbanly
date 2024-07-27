import Link from "next/link"

const Footer = () => {
  return (
    <footer className="text-center w-full fixed bottom-4 right-1/2 translate-x-1/2 border-t-2 borderneutral-200 pt-4">
      Made with ❤️ by <Link href={"https://rohilvarma.com"}>Rohil Varma</Link>
    </footer>
  )
}

export default Footer