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
        <div className="w-full min-h-72 sm:min-h-80 md:h-96 pt-16 sm:pt-36 md:pt-48 pb-6 sm:pb-14 md:pb-16 flex flex-col items-center justify-center sm:justify-end relative overflow-hidden">
            {/* image */}
            <Image
                className="object-cover w-full h-full absolute inset-0 z-10"
                width={1920}
                height={396}
                priority
                src={bg}
                alt="bg"
            />
            {/* search and title */}
            <div className="flex flex-col gap-5 sm:gap-6 md:gap-8 relative z-20 w-full max-w-2xl px-4 sm:px-6 items-center mx-auto">
                <p className="text-white font-semibold text-2xl xs:text-3xl sm:text-4xl tracking-tight leading-tight sm:leading-[43.2px] text-center">
                    Find Your Next Course
                </p>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col xs:flex-row gap-2.5 sm:gap-4 w-full justify-between items-center"
                >
                    <div className="w-full flex-1 min-w-0">
                        <CommonFieldset
                            control={control}
                            register_as="search"
                            placeholder="Search"
                            errors={errors}
                            innerWrapper="rounded-full py-3 sm:py-3.5! !px-5 sm:!px-6"
                            icon={<FaSearch className="text-sm text-[#82868E]" />}
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="secondary"
                        className="w-full xs:w-auto shrink-0 px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-lime text-black font-semibold text-sm sm:text-base hover:bg-lime/90 cursor-pointer shadow-xs transition-transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Search
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default CoursesHeroSearch;