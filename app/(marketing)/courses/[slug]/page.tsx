import type { Metadata } from "next";
import UnderDevelopment from "@/components/common/under-development";
import { getCourseBySlug } from "@/data/courses";

interface CourseDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CourseDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  return {
    title: course ? `${course.title} | Bytespace` : "Course Details | Bytespace",
    description: course?.subtitle || "View comprehensive course details, syllabus, and enrollment options on Bytespace.",
  };
}

const CourseDetail = async ({ params }: CourseDetailPageProps) => {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  return (
    <UnderDevelopment
      title={course ? course.title : "Course Details Page"}
      subtitle={course ? `Course ID: #${course.id} • ${course.category.name}` : undefined}
      description="We are currently building this comprehensive course experience, including video lessons, curriculum modules, and interactive student discussions."
      badge="Under Development"
      primaryActionHref="/courses"
      primaryActionLabel="Explore Other Courses"
    />
  );
};

export default CourseDetail;