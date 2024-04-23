"use client";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { authAtom } from "@/store/atoms/authAtom";

export default function Home() {
  const auth = useRecoilValue(authAtom);
  const router = useRouter();
  if (auth?.isLogged) {
    router.replace("/dashboard");
  } else {
    router.replace("/login");
  }
}
