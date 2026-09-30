import type { Metadata } from "next";
import UnderDevelopment from "@/components/common/under-development";

export const metadata: Metadata = {
  title: "Creators Directory | Bytespace",
  description: "Meet the top educators, industry instructors, and creators on Bytespace.",
};

const CreatorsPage = () => {
  return (
    <UnderDevelopment
      title="Creators Catalog"
      subtitle="Discover Top Instructors & Mentors"
      description="The Creators directory and educator directory are under active development. You will soon be able to discover, follow, and learn directly from top industry experts."
      badge="Under Development"
      primaryActionHref="/courses"
      primaryActionLabel="Browse Courses"
    />
  );
};

export default CreatorsPage;