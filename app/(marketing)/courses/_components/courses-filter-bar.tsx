import { useState, useRef, useEffect } from "react";
import { COURSE_CATEGORIES, COURSE_LEVELS, SORT_OPTIONS, FILTER_TABS } from "@/data/courses";
import { cn } from "@/lib/utils";
import { CourseFilterParams } from "@/types";
import { BiBarChartAlt2, BiCategory, BiMenuAltRight } from "react-icons/bi";
import { FiChevronLeft, FiChevronRight, FiRotateCcw } from "react-icons/fi";

interface CoursesFilterBarProps {
    filters: CourseFilterParams;
    setFilters: React.Dispatch<React.SetStateAction<CourseFilterParams>>;
}

const CoursesFilterBar = ({ filters, setFilters }: CoursesFilterBarProps) => {
    // Controls which filter group is currently visible below ("category" or "level")
    const [show, setShow] = useState<"level" | "category">("category");

    // Sort dropdown menu state
    const [isSortOpen, setIsSortOpen] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    // Close sort dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
                setIsSortOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handlers
    const handleCategoryClick = (category: string) => {
        setFilters((prev) => ({ ...prev, category: category.toLowerCase(), page: 1 }));
    };

    const handleLevelClick = (level: string) => {
        setFilters((prev) => ({ ...prev, level, page: 1 }));
    };

    const handleSortSelect = (sort: string) => {
        setFilters((prev) => ({ ...prev, sort, page: 1 }));
        setIsSortOpen(false);
    };

    const activeCategory = filters.category || "all";
    const activeLevel = filters.level || "all";
    const activeSort = filters.sort || "relevant";
    const hasSearch = !!filters.search?.trim();

    const isAnyFilterActive =
        activeCategory !== "all" ||
        activeLevel !== "all" ||
        activeSort !== "relevant" ||
        hasSearch;

    const handleClearFilters = () => {
        setFilters((prev) => ({
            ...prev,
            search: "",
            category: "all",
            level: "all",
            sort: "relevant",
            page: 1,
        }));
        setShow("category");
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }
    };

    // All categories without slicing
    const displayCategories = COURSE_CATEGORIES;

    // Horizontal scroll container ref & states
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 4);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
        }
    };

    useEffect(() => {
        // Check after layout render
        const timer = setTimeout(checkScrollButtons, 50);
        const currentRef = scrollContainerRef.current;
        if (currentRef) {
            currentRef.addEventListener("scroll", checkScrollButtons);
            window.addEventListener("resize", checkScrollButtons);
        }
        return () => {
            clearTimeout(timer);
            if (currentRef) {
                currentRef.removeEventListener("scroll", checkScrollButtons);
            }
            window.removeEventListener("resize", checkScrollButtons);
        };
    }, [show]);

    const handleScroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const scrollAmount = 280;
            scrollContainerRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    const hasOverflow = canScrollLeft || canScrollRight;

    return (
        <div className="w-full flex flex-col gap-4 sm:gap-5 md:gap-6">
            {/* Top row: Filter buttons & Sort dropdown (Single row: icons only on mobile, text on sm+) */}
            <div className="w-full flex items-center justify-between gap-2 sm:gap-4">
                {/* Left side: Level & Category toggle pills */}
                <div className="flex items-center gap-1.5 sm:gap-3">
                    {FILTER_TABS.map(({ key, label }) => {
                        return (
                            <button
                                key={key}
                                type="button"
                                onClick={() => setShow(key)}
                                title={label}
                                className={cn(
                                    "size-9 p-0 aspect-square sm:aspect-auto sm:w-auto sm:h-10 sm:px-4.5 rounded-full border text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 sm:gap-2 transition-all cursor-pointer shrink-0",
                                    show === key
                                        ? "border-[#040819] text-[#040819] bg-[#F8FAFC] shadow-xs font-semibold"
                                        : "border-[#CED0D3] text-[#475467] bg-white hover:border-[#98A2B3] hover:text-[#101828]"
                                )}
                            >
                                {
                                    key === "category" ? <BiCategory className="size-4.5 text-current shrink-0" /> : <BiBarChartAlt2 className="size-4.5 text-current shrink-0" />
                                }
                                <span className="hidden sm:inline">{label}</span>
                            </button>
                        );
                    })}
                </div>

                {/* Right side: Clear Filter + Most relevant sort dropdown */}
                <div className="flex items-center gap-1.5 sm:gap-3">
                    {/* Clear Filter Button */}
                    {isAnyFilterActive && (
                        <button
                            type="button"
                            onClick={handleClearFilters}
                            title="Clear all filters"
                            className="size-9 p-0 aspect-square sm:aspect-auto sm:w-auto sm:h-10 sm:px-4 rounded-full border border-red-200 bg-red-50/70 hover:bg-red-100 text-red-600 text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-xs active:scale-95 animate-in fade-in zoom-in-95 duration-200 shrink-0"
                        >
                            <FiRotateCcw className="size-4 text-red-500 shrink-0" />
                            <span className="hidden sm:inline">Clear Filter</span>
                        </button>
                    )}

                    <div className="relative" ref={sortRef}>
                        <button
                            type="button"
                            onClick={() => setIsSortOpen((prev) => !prev)}
                            title={SORT_OPTIONS.find((opt) => opt.value === activeSort)?.label || "Sort"}
                            className="size-9 p-0 aspect-square sm:aspect-auto sm:w-auto sm:h-10 sm:px-4.5 rounded-full border border-[#CED0D3] bg-white text-[#344054] text-xs sm:text-sm font-medium flex items-center justify-center gap-1.5 sm:gap-2 hover:border-[#98A2B3] transition-all cursor-pointer shrink-0"
                        >
                            <BiMenuAltRight className="size-4.5 text-current shrink-0" />
                            <span className="hidden sm:inline line-clamp-1">
                                {SORT_OPTIONS.find((opt) => opt.value === activeSort)?.label || "Most relevant"}
                            </span>
                        </button>

                        {/* Sort Dropdown Menu */}
                        {isSortOpen && (
                            <div className="absolute right-0 mt-2 w-44 sm:w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-30 animate-in fade-in zoom-in-95 duration-150">
                                {SORT_OPTIONS.map((option) => (
                                    <button
                                        key={option.value}
                                        type="button"
                                        onClick={() => handleSortSelect(option.value)}
                                        className={cn(
                                            "w-full text-left px-3.5 sm:px-4 py-2 text-xs sm:text-sm transition-colors cursor-pointer",
                                            activeSort === option.value
                                                ? "bg-[#F8FAFC] text-black font-semibold"
                                                : "text-[#475467] hover:bg-[#F1F3F5] hover:text-[#101828]"
                                        )}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Bottom row: Filter values with Left & Right Scroll Buttons */}
            <div className="relative w-full flex items-center gap-1.5 sm:gap-2">
                {/* Left Arrow Button */}
                {hasOverflow && (
                    <button
                        type="button"
                        onClick={() => handleScroll("left")}
                        disabled={!canScrollLeft}
                        aria-label="Scroll left"
                        className={cn(
                            "shrink-0 size-8 sm:size-9 rounded-full border border-[#CED0D3] bg-white text-[#344054] flex items-center justify-center transition-all shadow-xs",
                            canScrollLeft
                                ? "hover:bg-[#F8FAFC] hover:text-black hover:border-[#98A2B3] cursor-pointer active:scale-95 opacity-100"
                                : "opacity-30 cursor-not-allowed border-gray-200"
                        )}
                    >
                        <FiChevronLeft className="size-4 sm:size-4.5" />
                    </button>
                )}

                {/* Scrollable Track */}
                <div
                    ref={scrollContainerRef}
                    className="w-full flex items-center gap-2 sm:gap-2.5 md:gap-3 overflow-x-auto scroll-smooth py-1 [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {show === "category" ? (
                        // Category Values List (All categories)
                        displayCategories.map((cat) => {
                            const isSelected =
                                activeCategory.toLowerCase() === cat.name.toLowerCase() ||
                                activeCategory.toLowerCase() === cat.slug.toLowerCase();

                            return (
                                <button
                                    key={cat.id}
                                    type="button"
                                    onClick={() => handleCategoryClick(cat.slug)}
                                    className={cn(
                                        "shrink-0 whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none",
                                        isSelected
                                            ? "bg-lime text-black font-semibold shadow-xs hover:bg-lime/90"
                                            : "bg-[#F1F3F5] text-[#475467] hover:bg-[#E5E7EB] hover:text-[#101828]"
                                    )}
                                >
                                    {cat.name}
                                </button>
                            );
                        })
                    ) : (
                        // Level Values List
                        <>
                            <button
                                type="button"
                                onClick={() => handleLevelClick("all")}
                                className={cn(
                                    "shrink-0 whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none",
                                    activeLevel === "all"
                                        ? "bg-lime text-black font-semibold shadow-xs hover:bg-lime/90"
                                        : "bg-[#F1F3F5] text-[#475467] hover:bg-[#E5E7EB] hover:text-[#101828]"
                                )}
                            >
                                All Levels
                            </button>
                            {COURSE_LEVELS.map((level) => {
                                const isSelected =
                                    activeLevel.toLowerCase() === level.slug.toLowerCase() ||
                                    activeLevel.toLowerCase() === level.name.toLowerCase();

                                return (
                                    <button
                                        key={level.id}
                                        type="button"
                                        onClick={() => handleLevelClick(level.slug)}
                                        className={cn(
                                            "shrink-0 whitespace-nowrap px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer select-none",
                                            isSelected
                                                ? "bg-lime text-black font-semibold shadow-xs hover:bg-lime/90"
                                                : "bg-[#F1F3F5] text-[#475467] hover:bg-[#E5E7EB] hover:text-[#101828]"
                                        )}
                                    >
                                        {level.name}
                                    </button>
                                );
                            })}
                        </>
                    )}
                </div>

                {/* Right Arrow Button */}
                {hasOverflow && (
                    <button
                        type="button"
                        onClick={() => handleScroll("right")}
                        disabled={!canScrollRight}
                        aria-label="Scroll right"
                        className={cn(
                            "shrink-0 size-8 sm:size-9 rounded-full border border-[#CED0D3] bg-white text-[#344054] flex items-center justify-center transition-all shadow-xs",
                            canScrollRight
                                ? "hover:bg-[#F8FAFC] hover:text-black hover:border-[#98A2B3] cursor-pointer active:scale-95 opacity-100"
                                : "opacity-30 cursor-not-allowed border-gray-200"
                        )}
                    >
                        <FiChevronRight className="size-4 sm:size-4.5" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default CoursesFilterBar;