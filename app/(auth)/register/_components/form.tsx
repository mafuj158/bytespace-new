"use client";

import { Button } from "@/components/ui/button";
import CommonFieldset from "@/components/ui/fieldset";
import { useState } from "react";
import { useForm } from "react-hook-form";

type TFormInputs = {
    name: string;
    email: string;
    password: string;
};

const Form = () => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<TFormInputs>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    const [name, email, password] = watch(["name", "email", "password"]);
    const isFormIncomplete = !name?.trim() || !email?.trim() || !password?.trim();

    const onSubmit = async (data: TFormInputs) => {
        setIsLoading(true);
        console.log("Register Form Data:", data);
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    };

    return (
        <form className="flex flex-col gap-5 mt-8" onSubmit={handleSubmit(onSubmit)}>
            {/* Full Name */}
            <CommonFieldset
                control={control}
                register_as="name"
                label="Full Name"
                placeholder="Jamie Davis"
                isRequired
                validationRules={{
                    required: "Full name is required",
                    minLength: { value: 2, message: "Name must be at least 2 characters" },
                }}
                errors={errors}
            />

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
                    Continue
                </Button>
            </div>
        </form>
    );
};

export default Form;