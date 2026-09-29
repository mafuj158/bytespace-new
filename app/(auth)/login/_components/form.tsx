"use client";

import { Button } from "@/components/ui/button";
import CommonFieldset from "@/components/ui/fieldset";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SocialAuth from "../../_components/social-auth";

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
        <form className="flex flex-col gap-3.5 sm:gap-4.5 mt-4 sm:mt-6" onSubmit={handleSubmit(onSubmit)}>
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
            <div className="flex justify-end pt-1 sm:pt-2">
                <Button
                    type="submit"
                    variant="secondary"
                    isLoading={isLoading}
                    disabled={isLoading || isFormIncomplete}
                    className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-lime text-black font-semibold text-sm sm:text-base hover:bg-lime/90 cursor-pointer shadow-xs transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Sign In
                </Button>
            </div>

            {/* Social Logins */}
            <SocialAuth label="or" />
        </form>
    );
};

export default LoginForm;
