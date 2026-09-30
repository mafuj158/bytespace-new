"use client";

import { CourseFilterParams } from "@/types";
import { useState } from "react";
import CoursesHeroSearch from "./courses-hero-search";
import CoursesFilterBar from "./courses-filter-bar";

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
            search: query,
            page: 1,
        }));
    }

    console.log(filters);

    return (
        <div className="w-full">
            {/* courses hero and search section */}
            <CoursesHeroSearch searchQuery={filters.search} setSearchQuery={handleSearchQueryChange} />
            {/* category filter tabs course grid and pagination */}
            <div className="container py-18 flex flex-col gap-20.5">
                <CoursesFilterBar filters={filters} setFilters={setFilters} />
            </div>
        </div>
    )
}


export default CoursesView;