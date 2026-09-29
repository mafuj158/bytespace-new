"use client"

import { COURSE_CATEGORIES, COURSES } from "@/data/courses"
import { Category } from "@/types"
import { useMemo, useState } from "react"
import { FaMinus, FaPlus } from "react-icons/fa"
import CourseCard from "../../courses/_components/course-card"

const INITIAL_CATEGORY_COUNT = 11

const CoursesShowcase = () => {
    const [activeCategory, setActiveCategory] = useState<Category>(COURSE_CATEGORIES[0])
    const [showAllCategories, setShowAllCategories] = useState<boolean>(false)

    // Filter courses based on active category
    const filteredCourses = useMemo(() => {
        if (activeCategory.slug === "featured" || activeCategory.id === "1") {
            return COURSES.filter((course) => course.isFeatured)
        }
        return COURSES.filter(
            (course) =>
                course.category.id === activeCategory.id ||
                course.category.slug === activeCategory.slug
        )
    }, [activeCategory])

    const displayedCategories = showAllCategories
        ? COURSE_CATEGORIES
        : COURSE_CATEGORIES.slice(0, INITIAL_CATEGORY_COUNT)

    return (
        <section id="courses" className="py-8 sm:py-12 md:py-16 lg:py-20">
            <div className="container flex flex-col justify-start items-center">
                {/* heading */}
                <div className="flex flex-col justify-start items-center gap-2 sm:gap-3 sm:max-w-3xl">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight font-semibold text-center text-[#040819]">
                        Discover Your Passion, Build Your Skills
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#82868E] text-center">
                        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
                    </p>
                </div>

                {/* categories */}
                <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 mt-5 sm:mt-7 md:mt-9">
                    {displayedCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category)}
                            className={`flex cursor-pointer px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-xs sm:text-sm md:text-base capitalize font-medium hover:bg-lime items-center transition-colors duration-200 ease-in-out gap-1.5 rounded-full ${
                                activeCategory.id === category.id
                                    ? "bg-lime font-semibold text-black"
                                    : "bg-gray-100 text-gray-700 hover:text-black"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                    {COURSE_CATEGORIES.length > INITIAL_CATEGORY_COUNT && (
                        <button
                            onClick={() => setShowAllCategories((prev) => !prev)}
                            className="flex text-xs sm:text-sm md:text-base cursor-pointer items-center gap-1.5 text-[#003BE2] font-satoshi font-medium hover:underline px-2 py-1.5 sm:py-2"
                        >
                            {showAllCategories ? (
                                <>
                                    <FaMinus className="text-[10px] sm:text-xs" />
                                    <span>Less</span>
                                </>
                            ) : (
                                <>
                                    <FaPlus className="text-[10px] sm:text-xs" />
                                    <span>More</span>
                                </>
                            )}
                        </button>
                    )}
                </div>

                {/* courses grid: 1 col below 390px, 2 cols from 390px, 3 cols from 1024px */}
                {filteredCourses.length > 0 ? (
                    <div className="w-full grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-5 md:gap-6 lg:gap-8 mt-6 sm:mt-10 md:mt-12 lg:mt-14">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-10 sm:py-14 text-center mt-6">
                        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-700">
                            No courses found in &quot;{activeCategory.name}&quot;
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400 mt-1.5 max-w-md px-4">
                            We haven&apos;t added any courses for this category yet. Check back soon or explore our featured courses!
                        </p>
                        <button
                            onClick={() => setActiveCategory(COURSE_CATEGORIES[0])}
                            className="mt-4 px-5 py-2 text-xs sm:text-sm bg-lime text-black font-semibold rounded-full cursor-pointer hover:opacity-90 transition active:scale-95 shadow-xs"
                        >
                            View Featured Courses
                        </button>
                    </div>
                )}
            </div>
        </section>
    )
}

export default CoursesShowcase