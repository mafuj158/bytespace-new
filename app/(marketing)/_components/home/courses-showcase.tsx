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
        <section id="courses" className="py-18">
            <div className="container flex flex-col justify-start items-center">
                {/* heading */}
                <div className="flex flex-col justify-start items-center gap-4">
                    <h1 className="text-5xl tracking-[-0.44px] leading-14 max-w-2xl font-semibold text-center">
                        Discover Your Passion, Build Your Skills
                    </h1>
                    <p className="text-lg max-w-5xl text-[#82868E] text-center">
                        At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
                    </p>
                </div>

                {/* categories */}
                <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-3 mt-10">
                    {displayedCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveCategory(category)}
                            className={`flex cursor-pointer px-6 py-3 text-base capitalize font-medium hover:bg-lime items-center transition-colors duration-300 ease-in-out gap-2 rounded-full ${
                                activeCategory.id === category.id
                                    ? "bg-lime font-semibold"
                                    : "bg-gray-100 text-gray-700"
                            }`}
                        >
                            {category.name}
                        </button>
                    ))}
                    {COURSE_CATEGORIES.length > INITIAL_CATEGORY_COUNT && (
                        <button
                            onClick={() => setShowAllCategories((prev) => !prev)}
                            className="flex text-base cursor-pointer items-center gap-2 text-[#003BE2] font-satoshi font-medium hover:underline px-2 py-3"
                        >
                            {showAllCategories ? (
                                <>
                                    <FaMinus className="text-xs" />
                                    <span>Less</span>
                                </>
                            ) : (
                                <>
                                    <FaPlus className="text-xs" />
                                    <span>More</span>
                                </>
                            )}
                        </button>
                    )}
                </div>

                {/* courses grid */}
                {filteredCourses.length > 0 ? (
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-center mt-10">
                        <p className="text-xl font-medium text-gray-700">
                            No courses found in &quot;{activeCategory.name}&quot;
                        </p>
                        <p className="text-sm text-gray-400 mt-2 max-w-md">
                            We haven&apos;t added any courses for this category yet. Check back soon or explore our featured courses!
                        </p>
                        <button
                            onClick={() => setActiveCategory(COURSE_CATEGORIES[0])}
                            className="mt-6 px-6 py-2.5 bg-lime text-black font-medium rounded-full cursor-pointer hover:opacity-90 transition"
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