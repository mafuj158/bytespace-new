"use client"

import { Button } from "@/components/ui/button";
import CommonFieldset from "@/components/ui/fieldset";
import bg from "@/public/hero_frame.png";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";

interface CoursesHeroSearchProps {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}
type TFormInputs = {
    search: string;
};

const CoursesHeroSearch = ({ searchQuery, setSearchQuery }: CoursesHeroSearchProps) => {


    // hooks
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
        reset
    } = useForm<TFormInputs>({
        defaultValues: {
            search: searchQuery || ""
        }
    });
    const [search] = watch(["search"]);
    //  const isFormIncomplete = !search?.trim();


    const onSubmit = (data: TFormInputs) => {
        setSearchQuery(data.search)
        reset();
    }



    return (
        <div className="w-full h-96 pt-60 pb-20 flex flex-col items-center justify-end relative">
            {/* image */}
            <Image className="object-cover w-full h-full absolute inset-0 z-10" width={1920} height={396} priority src={bg} alt="bg" />
            {/* search and title */}
            <div className="flex flex-col gap-8 relative z-20 w-2xl items-center mx-auto">
                <p className="text-white font-semibold text-4xl tracking-[-0.36px] leading-[43.2px]">Find Your Next Course</p>
                <form onSubmit={handleSubmit(onSubmit)} className="flex gap-4 w-full justify-between items-center">
                    <CommonFieldset
                        control={control}
                        register_as="search"
                        placeholder="Search"
                        errors={errors}
                        innerWrapper="rounded-full py-3.5! !px-6"
                        icon={<FaSearch className="text-sm text-[#82868E]" />}
                    />
                    <Button
                        type="submit"
                        variant="secondary"
                        className="w-full sm:w-auto px-6 py-2.5 sm:px-8 sm:py-3 rounded-full bg-lime text-black font-semibold text-sm sm:text-base hover:bg-lime/90 cursor-pointer shadow-xs transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Search
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default CoursesHeroSearch;