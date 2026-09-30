"use client";

import { CourseFilterParams } from "@/types";
import { useMemo, useState } from "react";
import { COURSES } from "@/data/courses";
import CustomPagination from "@/components/ui/custom-pagination";
import CoursesHeroSearch from "./courses-hero-search";
import CoursesFilterBar from "./courses-filter-bar";
import CourseCard from "./course-card";

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

    // Filter and sort courses based on filters
    const filteredCourses = useMemo(() => {
        let result = [...COURSES];

        // 1. Search Query
        if (filters.search?.trim()) {
            const query = filters.search.toLowerCase().trim();
            result = result.filter(
                (course) =>
                    course.title.toLowerCase().includes(query) ||
                    course.subtitle?.toLowerCase().includes(query) ||
                    course.creator?.name.toLowerCase().includes(query) ||
                    course.category.name.toLowerCase().includes(query)
            );
        }

        // 2. Category Filter
        if (filters.category && filters.category !== "all") {
            if (filters.category.toLowerCase() === "featured") {
                result = result.filter((course) => course.isFeatured);
            } else {
                result = result.filter(
                    (course) =>
                        course.category.name.toLowerCase() === filters.category.toLowerCase() ||
                        course.category.slug.toLowerCase() === filters.category.toLowerCase()
                );
            }
        }

        // 3. Level Filter
        if (filters.level && filters.level !== "all") {
            result = result.filter(
                (course) =>
                    course.level.slug.toLowerCase() === filters.level.toLowerCase() ||
                    course.level.name.toLowerCase() === filters.level.toLowerCase()
            );
        }

        // 4. Sort
        if (filters.sort === "popular") {
            result.sort((a, b) => b.studentsCount - a.studentsCount);
        } else if (filters.sort === "rating") {
            result.sort((a, b) => b.rating - a.rating);
        } else if (filters.sort === "price_asc") {
            result.sort((a, b) => a.price - b.price);
        } else if (filters.sort === "price_desc") {
            result.sort((a, b) => b.price - a.price);
        }

        return result;
    }, [filters]);

    // Pagination calculations
    const limit = filters.limit || 6;
    const totalPages = Math.ceil(filteredCourses.length / limit);
    console.log(totalPages);
    const paginatedCourses = useMemo(() => {
        const start = (filters.page - 1) * limit;
        return filteredCourses.slice(start, start + limit);
    }, [filteredCourses, filters.page, limit]);

    return (
        <div className="w-full">
            {/* courses hero and search section */}
            <CoursesHeroSearch searchQuery={filters.search} setSearchQuery={handleSearchQueryChange} />
            {/* category filter tabs course grid and pagination */}
            <div className="container py-8 sm:py-12 md:py-16 lg:py-18 flex flex-col gap-6 sm:gap-12 md:gap-16 lg:gap-20">
                {/* filter bar */}
                <CoursesFilterBar filters={filters} setFilters={setFilters} />
                {/* course grid */}
                <div className="w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 md:gap-6 lg:gap-8 ">
                    {paginatedCourses.length > 0 ? (
                        paginatedCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))
                    ) : (
                        <div className="col-span-full py-16 flex flex-col items-center justify-center text-center">
                            <p className="text-xl font-semibold text-[#040819]">No courses found</p>
                            <p className="text-sm text-[#82868E] mt-1">Try adjusting your search or filter options</p>
                        </div>
                    )}
                </div>
                {/* Ant Design Customized Pagination */}
                {totalPages > 1 && (
                    <CustomPagination
                        current={filters.page}
                        pageSize={filters.limit}
                        total={filteredCourses.length}
                        onChange={(page) => {
                            setFilters((prev) => ({ ...prev, page }));
                            // Smooth scroll to top of courses grid on page change
                            window.scrollTo({ top: 380, behavior: "smooth" });
                        }}
                        hideOnSinglePage={true}
                    />
                )}
            </div>
        </div>
    )
}

export default CoursesView;