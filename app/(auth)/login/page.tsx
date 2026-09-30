import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "./_components/form";

export const metadata: Metadata = {
  title: "Login | ByteSpace",
  description: "Log in to your ByteSpace account to access your courses and dashboard.",
};

const Login =  () => {

  return (
    <div className="w-full flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex flex-col gap-0.5">
        <span className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#003BE2] font-satoshi">
          Sign In
        </span>
        <h2 className="text-lg xs:text-xl sm:text-2xl lg:text-3xl 2xl:text-[36px] font-bold text-gray-900 tracking-tight leading-tight">
          Welcome Back
        </h2>
      </div>

      {/* Form */}
      <LoginForm />

      {/* Footer */}
      <p className="text-xs sm:text-sm text-gray-500 text-center mt-5 sm:mt-6 lg:mt-8">
        Don&apos;t have an account?{" "}
        <Link href="/register" className="text-[#003BE2] font-semibold hover:underline">
          Create an Account
        </Link>
      </p>
    </div>
  );
};

export default Login;
