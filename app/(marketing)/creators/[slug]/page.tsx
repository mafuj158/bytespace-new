import type { Metadata } from "next";
import UnderDevelopment from "@/components/common/under-development";
import { getCreatorBySlug } from "@/data/courses";

interface CreatorDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: CreatorDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);

  return {
    title: creator ? `${creator.name} Profile | Bytespace` : "Creator Profile | Bytespace",
    description: creator?.bio || "Explore creator courses, bio, and student reviews on Bytespace.",
  };
}

const CreatorDetail = async ({ params }: CreatorDetailPageProps) => {
  const { slug } = await params;
  const creator = getCreatorBySlug(slug);

  return (
    <UnderDevelopment
      title={creator ? `${creator.name} Profile` : "Creator Profile Page"}
      subtitle={creator ? `${creator.role} • ${creator.studentsCount || 2300}+ Students` : undefined}
      description="Creator profiles, including dedicated course portfolios, badges, and verified student feedback, are currently under development."
      badge="Under Development"
      primaryActionHref="/courses"
      primaryActionLabel="View Available Courses"
    />
  );
};

export default CreatorDetail;