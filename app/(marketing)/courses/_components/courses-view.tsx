"use client";

import { CourseFilterParams } from "@/types";
import { useState } from "react";
import CoursesHeroSearch from "./courses-hero-search";



interface CoursesViewProps {
    initialFilters: CourseFilterParams;
}


const CoursesView = ({ initialFilters }: CoursesViewProps) => {

    // states
    const [filters, setFilters] = useState<CourseFilterParams>(initialFilters);

    // handle search query change
    const handleSearchQueryChange = (query: string) => {
        setFilters((prev) => ({
            ...prev,
            search: query
        }));
    }

    console.log(filters);


    return (
        <div className="w-full">
            {/* courses hero and search section */}
            <CoursesHeroSearch searchQuery={filters.search} setSearchQuery={handleSearchQueryChange} />
            {/* category filter tabs course grid and pagination */}
            <div className="w-full py-18 flex flex-col gap-20.5">

            </div>
        </div>
    )
}


export default CoursesView;