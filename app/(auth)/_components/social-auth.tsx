import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa";

interface SocialAuthProps {
  label?: string;
}

const SocialAuth = ({ label = "or" }: SocialAuthProps) => {
  return (
    <div className="flex flex-col gap-4 mt-2">
      {/* Divider */}
      <div className="flex items-center">
        <div className="flex-1 border-t border-gray-200"></div>
        <span className="px-3 text-xs text-gray-400 font-medium">
          {label}
        </span>
        <div className="flex-1 border-t border-gray-200"></div>
      </div>

      {/* Social Logins */}
      <div className="flex items-center justify-center gap-4">
        <button
          type="button"
          className="size-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer active:scale-95"
          aria-label="Continue with Facebook"
        >
          <FaFacebook className="size-5 text-[#1877F2]" />
        </button>
        <button
          type="button"
          className="size-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer active:scale-95"
          aria-label="Continue with Google"
        >
          <FaGoogle className="size-4 text-gray-800" />
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;
