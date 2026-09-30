
import { CourseFilterParams } from "@/types";
import type { Metadata } from "next";
import CoursesView from "./_components/courses-view";

export const metadata: Metadata = {
  title: "Courses | Bytespace",
  description: "Browse all industry-leading online courses and digital programs on Bytespace.",
};

interface CoursesPageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

const Courses = async ({ searchParams }: CoursesPageProps) => {


  // get search params
  const resolvedParams = await searchParams;

  // get filters
  const filters: CourseFilterParams = {
    search: resolvedParams.search || "",
    category: resolvedParams.category || "all",
    level: resolvedParams.level || "all",
    price: resolvedParams.price || "all",
    sort: resolvedParams.sort || "relevant",
    page: Number(resolvedParams.page) || 1,
    limit: Number(resolvedParams.limit) || 8,
  };

  return (
    <CoursesView initialFilters={filters} />
  )
};

export default Courses;