"use client";
import LoginForm from "@/app/login/components/LoginForm";
import { Button } from "@/components";

const Login = () => {
  return (
    <main className="flex min-h-screen min-w-screen items-center justify-center bg-gray-300">
      <div
        className={
          "w-full md:w-[500px] h-screen md:h-auto bg-white p-6 flex flex-col space-y-6"
        }
      >
        <h1 className={"text-4xl font-bold self-center"}>Login</h1>
        <LoginForm />
      </div>
    </main>
  );
};

export default Login;
