import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Link href={"/dashboard"}>Dashboard</Link>
    </main>
  );
}
