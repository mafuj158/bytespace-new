"use client"

import { Course } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

interface CourseCardProps {
    course: Course;
}

const DEFAULT_AVATARS = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
];

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    const avatars = course.studentAvatars?.length > 0 ? course.studentAvatars.slice(0, 4) : DEFAULT_AVATARS;

    return (
        <div className="group w-full p-2.5 sm:p-3.5 md:p-4 flex flex-col gap-2.5 sm:gap-3.5 md:gap-4 bg-white border border-[#CED0D3] rounded-2xl sm:rounded-3xl hover:border-lime hover:shadow-lg transition-all duration-300">
            {/* Image and floating badge counters */}
            <div className="w-full rounded-xl sm:rounded-2xl md:rounded-3xl h-36 xs:h-40 sm:h-44 md:h-52 overflow-hidden relative">
                <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Glassmorphism badges at bottom of thumbnail */}
                <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 flex items-center justify-between gap-1 sm:gap-1.5 z-10">
                    <div className="px-1.5 sm:px-2.5 py-0.5 sm:py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[10px] sm:text-[11px] font-medium text-gray-800 text-center flex-1 truncate shadow-xs">
                        {course.lessonsCount} Lessons
                    </div>
                    <div className="px-1.5 sm:px-2.5 py-0.5 sm:py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[10px] sm:text-[11px] font-medium text-gray-800 text-center flex-1 truncate shadow-xs">
                        {course.duration}
                    </div>
                    <div className="hidden xs:block px-1.5 sm:px-2.5 py-0.5 sm:py-1.5 rounded-full bg-white/80 backdrop-blur-md text-[10px] sm:text-[11px] font-medium text-gray-800 text-center flex-1 truncate shadow-xs">
                        {course.commentsCount || 59} Comments
                    </div>
                </div>
            </div>

            {/* Title, Creator, and Rating */}
            <div className="flex items-start justify-between gap-2 pt-0.5 sm:pt-1">
                <div className="flex-1 min-w-0">
                    <Link href={`/courses/${course.slug}`}>
                        <h3 className="text-sm sm:text-base md:text-xl font-bold text-gray-900 tracking-tight line-clamp-1 group-hover:text-[#003BE2] transition-colors">
                            {course.title}
                        </h3>
                    </Link>
                    <div className="flex items-center gap-1 text-[11px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">
                        <span>by</span>
                        <Link
                            href={`/creators/${course.creator.slug}`}
                            className="text-[#003BE2] hover:underline font-medium truncate"
                        >
                            {course.creator.name.toLowerCase()}
                        </Link>
                    </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-gray-700 shrink-0 pt-0.5">
                    <span className="font-semibold text-xs sm:text-sm md:text-base">{course.rating.toFixed(1)}</span>
                    <FaStar className="text-gray-300 text-xs sm:text-sm" />
                </div>
            </div>

            {/* Level & Student Avatars Stack */}
            <div className="flex items-center justify-between gap-1.5 pt-0.5 sm:pt-1">
                {/* Level badge */}
                <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 bg-[#F4F5F6] rounded-full text-[10px] sm:text-xs font-medium text-gray-700">
                    <svg
                        className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <rect x="3" y="14" width="3.5" height="7" rx="1" />
                        <rect x="10" y="9" width="3.5" height="12" rx="1" />
                        <rect x="17" y="4" width="3.5" height="17" rx="1" />
                    </svg>
                    <span>{course.level.name}</span>
                </div>

                {/* Avatars + Count badge */}
                <div className="flex items-center -space-x-1.5 sm:-space-x-2">
                    {avatars.slice(0, 3).map((avatar, idx) => (
                        <div
                            key={idx}
                            className="relative size-5 sm:size-6 md:size-7 rounded-full border-2 border-white overflow-hidden shadow-xs shrink-0"
                        >
                            <Image
                                src={avatar}
                                alt="Student avatar"
                                fill
                                className="object-cover"
                                sizes="28px"
                            />
                        </div>
                    ))}
                    <div className="relative size-5 sm:size-6 md:size-7 rounded-full border-2 border-white bg-[#D4FB20] text-black text-[9px] sm:text-[10px] font-bold flex items-center justify-center shadow-xs shrink-0">
                        26+
                    </div>
                </div>
            </div>

            {/* Price Row */}
            <div className="pt-1 sm:pt-2">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#003BE2] font-satoshi">
                    ${course.price}
                </span>
                <span className="text-[10px] sm:text-xs text-[#82868E] font-normal ml-0.5">
                    /{course.billingPeriod}
                </span>
            </div>
        </div>
    );
};

export default CourseCard;