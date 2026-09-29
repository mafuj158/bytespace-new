import type { Metadata } from "next";
import Link from "next/link";
import Form from "./_components/form";

export const metadata: Metadata = {
  title: "Register | ByteSpace",
  description: "Create your ByteSpace account to start learning or teaching today.",
};

const Register = () => {
  return (
    <div className="w-full flex flex-col justify-between h-full">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-[#003BE2] font-satoshi">
          Create an Account
        </span>
        <h2 className="text-3xl sm:text-[38px] font-bold text-gray-900 tracking-tight leading-tight">
          Welcome to ByteSpace
        </h2>
      </div>

      {/* Form */}
      <Form />

      {/* Footer */}
      <p className="text-xs sm:text-sm text-gray-500 text-center mt-8">
        Already have an account?{" "}
        <Link href="/login" className="text-[#003BE2] font-semibold hover:underline">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;