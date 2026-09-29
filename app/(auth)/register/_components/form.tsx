"use client";
import { useForm } from "react-hook-form";

type TFormInputs = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};
const Form = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<TFormInputs>();

    const onSubmit = (data: TFormInputs) => {
        console.log(data);
    };
    return (
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>

        </form>
    )
}

export default Form