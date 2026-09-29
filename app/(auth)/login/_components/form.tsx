"use client";

import { Button } from "@/components/ui/button";
import CommonFieldset from "@/components/ui/fieldset";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaGoogle } from "react-icons/fa";

type TLoginFormInputs = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TLoginFormInputs>({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const [email, password] = watch(["email", "password"]);
    const isFormIncomplete = !email?.trim() || !password?.trim();

    const onSubmit = async (data: TLoginFormInputs) => {
        setIsLoading(true);
        console.log("Login Form Data:", data);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <form className="flex flex-col gap-5 mt-8" onSubmit={handleSubmit(onSubmit)}>
            {/* Email */}
            <CommonFieldset
                control={control}
                register_as="email"
                type="email"
                label="Email"
                placeholder="designer@example.com"
                isRequired
                validationRules={{
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                    },
                }}
                errors={errors}
            />

            {/* Password */}
            <CommonFieldset
                control={control}
                register_as="password"
                type="password"
                label="Password"
                placeholder="••••••••"
                isRequired
                validationRules={{
                    required: "Password is required",
                    minLength: { value: 6, message: "Password must be at least 6 characters" },
                }}
                errors={errors}
            />

            {/* Submit Button */}
            <div className="flex justify-end pt-2">
                <Button
                    type="submit"
                    variant="secondary"
                    isLoading={isLoading}
                    disabled={isLoading || isFormIncomplete}
                    className="px-8 py-3 rounded-full bg-lime text-black font-semibold text-base hover:bg-lime/90 cursor-pointer shadow-xs transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Sign In
                </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center my-2">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-3 text-xs text-gray-400 font-medium">or</span>
                <div className="flex-1 border-t border-gray-200"></div>
            </div>

            {/* Social Logins */}
            <div className="flex items-center justify-center gap-4">
                <button
                    type="button"
                    className="size-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer"
                    aria-label="Sign in with Facebook"
                >
                    <FaFacebook className="size-5 text-[#1877F2]" />
                </button>
                <button
                    type="button"
                    className="size-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer"
                    aria-label="Sign in with Google"
                >
                    <FaGoogle className="size-4 text-gray-800" />
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
