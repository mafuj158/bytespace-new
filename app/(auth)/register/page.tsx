
import type { Metadata } from "next";
import Form from "./_components/form";

export const metadata: Metadata = {
  title: "Register | Bytespace",
  description: "Create your Bytespace account to start learning or teaching today.",
};

const Register = () => {
  return (
    <div className="w-full flex flex-col">
      {/* header */}
      <div></div>
      {/* form */}
      <Form />
      {/* footer */}
    </div>
  );
};

export default Register;