"use client"
import { Course } from '@/types';
import Image from 'next/image';
import React from 'react'


interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    return (
        <div className='w-full p-4 flex flex-col gap-5 border border-[#CED0D3] rounded-3xl'>
            {/* image and counts */}
            <div className='w-full rounded-3xl  h-52 overflow-hidden relative'>
                <Image
                    src={course.thumbnail}
                    alt={course.title}
                    width={320}
                    height={200}
                    className='w-full h-full absolute inset-0'
                />
                {/* counts badge */}
                
            </div>
        </div>
    )
}

export default CourseCard;