"use client";
import Link from "next/link";
import { useGetHotCoffee } from "@/hooks/sample";
import { Loading } from "@/components";
import { useRecoilState } from "recoil";
import { authAtom } from "@/store/atoms/authAtom";

export default function Home() {
  const [auth, setAuth] = useRecoilState(authAtom);
  const { isLoading: isGettingHotCoffee, data } = useGetHotCoffee();

  if (isGettingHotCoffee) return <Loading />;

  return (
    <main className="flex min-h-screen flex-col">
      <Link href={"/dashboard"}>Dashboard</Link>
    </main>
  );
}
