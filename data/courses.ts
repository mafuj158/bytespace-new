import { Category, Course, CourseLevel, Creator, LearningPath, Testimonial } from "@/types";

// -------------------------------------------------------------
// 1. FILTER CATEGORIES (For Discover Your Passion pill tags)
// -------------------------------------------------------------
export const COURSE_CATEGORIES: Category[] = [
    { id: "1", name: "Featured", slug: "featured" },
    { id: "2", name: "Music", slug: "music" },
    { id: "3", name: "Drawing & Painting", slug: "drawing-painting" },
    { id: "4", name: "Marketing", slug: "marketing" },
    { id: "5", name: "Animation", slug: "animation" },
    { id: "6", name: "Social Media", slug: "social-media" },
    { id: "7", name: "UI/UX Design", slug: "ui-ux-design" },
    { id: "8", name: "Creative Marketing", slug: "creative-marketing" },
    { id: "9", name: "Digital Illustration", slug: "digital-illustration" },
    { id: "10", name: "Film & Video", slug: "film-video" },
    { id: "11", name: "Crafts", slug: "crafts" },
    { id: "12", name: "Freelance & Entrepreneurship", slug: "freelance-entrepreneurship" },
    { id: "13", name: "Graphic Design", slug: "graphic-design" },
    { id: "14", name: "Photography", slug: "photography" },
    { id: "15", name: "Productivity", slug: "productivity" },
    { id: "16", name: "Web Development", slug: "web-development" },
    { id: "17", name: "Data Science", slug: "data-science" },
    { id: "18", name: "Cooking", slug: "cooking" },
    { id: "19", name: "AI & Machine Learning", slug: "ai-machine-learning" },
    { id: "20", name: "3D Modeling", slug: "3d-modeling" },
    { id: "21", name: "Mobile App Development", slug: "mobile-app-development" },
    { id: "22", name: "Cyber Security", slug: "cyber-security" },
    { id: "23", name: "Game Development", slug: "game-development" },
    { id: "24", name: "SEO & Copywriting", slug: "seo-copywriting" },
    { id: "25", name: "Personal Development", slug: "personal-development" },
    { id: "26", name: "Finance & Investing", slug: "finance-investing" },
    { id: "27", name: "Cloud & DevOps", slug: "cloud-devops" },
    { id: "28", name: "Motion Design", slug: "motion-design" },
];
export const COURSE_LEVELS: CourseLevel[] = [
    { id: "01", name: "Beginner", slug: "beginner" },
    { id: "02", name: "Intermediate", slug: "intermediate" },
    { id: "03", name: "Advanced", slug: "advanced" },
];

// -------------------------------------------------------------
// 2. CREATORS
// -------------------------------------------------------------
export const PUREPEARL_STUDIO: Creator = {
    id: "creator-1",
    name: "PurePearl Studio",
    slug: "purepearl-studio",
    role: "Passionate UI/UX, Web designer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    bio: "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    productsCount: 3,
    followersCount: 12,
    studentsCount: 2300,
};

// Helper to find category by slug
const getCategory = (slug: string): Category => {
    return COURSE_CATEGORIES.find((c) => c.slug === slug) || COURSE_CATEGORIES[0];
};

// -------------------------------------------------------------
// 3. COURSES MOCK DATA
// -------------------------------------------------------------
export const COURSES: Course[] = [
    {
        id: "1",
        slug: "learn-figma-from-basic",
        title: "Learn Figma from Basic",
        subtitle: "Master the fundamental UI/UX design tools and workflow in Figma from scratch",
        category: getCategory("ui-ux-design"),
        creator: PUREPEARL_STUDIO,
        rating: 4.5,
        reviewsCount: 140,
        studentsCount: 2300,
        level: COURSE_LEVELS[0],
        price: 25,
        billingPeriod: "lifetime",
        lessonsCount: 17,
        duration: "2 hours 16 mins",
        commentsCount: 59,
        thumbnail: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
        isFeatured: true,
        studentAvatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "2",
        slug: "build-digital-asset",
        title: "Build Digital Asset: A Comprehensive Guide",
        subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
        category: getCategory("graphic-design"),
        creator: PUREPEARL_STUDIO,
        rating: 4.8,
        reviewsCount: 172,
        studentsCount: 199,
        level: COURSE_LEVELS[1],
        price: 25,
        billingPeriod: "lifetime",
        lessonsCount: 112,
        duration: "24 hours",
        commentsCount: 99,
        thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
        isFeatured: true,
        studentAvatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        ],
        description: `Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.

In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.

As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.`,
        keyPoints: [
            "Foundational Concepts",
            "Design Principles Mastery",
            "Advanced Techniques in Digital Creation",
            "Project Showcase and Critique",
            "Optimizing for Various Platforms",
            "Digital Asset Management Best Practices",
            "Monetization Strategies",
            "Capstone Project: Building Your Portfolio",
        ],
        sneakPeekImages: [
            "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=500&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&auto=format&fit=crop&q=80",
        ],
        includes: [
            "Learning Resources",
            "Quality Lesson Videos",
            "Certificate of Completion",
            "Private Consultation",
        ],
        modules: [
            {
                id: "m1",
                moduleNumber: 1,
                title: "Module 1: Introduction to Digital Assets",
                description: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools'. Dive into the essentials of digital asset creation.",
                duration: "12 mins",
                lessons: [
                    { id: "l1", title: "01 Introduction to Digital Assets", duration: "12 mins" },
                    { id: "l2", title: "02 Design Principles for Impacts", duration: "21 mins" },
                    { id: "l3", title: "03 Advanced Techniques in Digital Creation", duration: "16 mins" },
                ],
            },
            {
                id: "m2",
                moduleNumber: 2,
                title: "Module 2: Design Principles for Impact",
                description: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials'. Elevate your visual communication skills.",
                duration: "21 mins",
            },
            {
                id: "m3",
                moduleNumber: 3,
                title: "Module 3: User-Centric Design Strategies",
                description: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials'. Craft digital assets with a focus on user-centric design.",
                duration: "28 mins",
            },
            {
                id: "m4",
                moduleNumber: 4,
                title: "Module 4: Interactive Media and Engagement",
                description: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements'. Master the art of creating immersive digital experiences.",
                duration: "35 mins",
            },
            {
                id: "m5",
                moduleNumber: 5,
                title: "Module 5: Project Showcase and Critique",
                description: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration'. Showcase your work with confidence.",
                duration: "40 mins",
            },
            {
                id: "m6",
                moduleNumber: 6,
                title: "Module 6: Optimizing Digital Assets for Various Platforms",
                description: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media'. Ensure widespread accessibility and engagement across diverse digital landscapes.",
                duration: "45 mins",
            },
        ],
        reviews: [
            {
                id: "r1",
                userName: "PurePearl Studio",
                userRole: "UI/UX Designer",
                userAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
                rating: 5,
                comment: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
                date: "a year ago",
            },
            {
                id: "r2",
                userName: "Albert Flores",
                userRole: "UI/UX Designer",
                userAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
                rating: 5,
                comment: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
                date: "a year ago",
            },
            {
                id: "r3",
                userName: "Cody Fisher",
                userRole: "UI/UX Designer",
                userAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
                rating: 5,
                comment: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
                date: "a year ago",
            },
            {
                id: "r4",
                userName: "Brooklyn Simmons",
                userRole: "UI/UX Designer",
                userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
                rating: 5,
                comment: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
                date: "a year ago",
            },
        ],
    },
    {
        id: "3",
        slug: "the-power-of-big-data",
        title: "The Power of Big Data",
        subtitle: "Analyze massive datasets, visualize trends, and extract critical business insights",
        category: getCategory("data-science"),
        creator: PUREPEARL_STUDIO,
        rating: 4.5,
        reviewsCount: 110,
        studentsCount: 1850,
       level: COURSE_LEVELS[0],
        price: 25,
        billingPeriod: "lifetime",
        lessonsCount: 17,
        duration: "2 hours 16 mins",
        commentsCount: 59,
        thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        isFeatured: true,
        studentAvatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "4",
        slug: "balancing-productivity-and-life",
        title: "Balancing Productivity and Life",
        subtitle: "Develop sustainable work habits, focus deeply, and avoid burnout in the digital age",
        category: getCategory("productivity"),
        creator: PUREPEARL_STUDIO,
        rating: 4.5,
        reviewsCount: 95,
        studentsCount: 1420,
        level: COURSE_LEVELS[0],
        price: 25,
        billingPeriod: "lifetime",
        lessonsCount: 17,
        duration: "2 hours 16 mins",
        commentsCount: 59,
        thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&auto=format&fit=crop&q=80",
        isFeatured: true,
        studentAvatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "5",
        slug: "mastering-money-management",
        title: "Mastering Money Management",
        subtitle: "Financial literacy, investments, and capital allocation strategies for modern entrepreneurs",
        category: getCategory("finance-investing"),
        creator: PUREPEARL_STUDIO,
        rating: 4.5,
        reviewsCount: 160,
        studentsCount: 2900,
        level: COURSE_LEVELS[2],
        price: 25,
        billingPeriod: "lifetime",
        lessonsCount: 17,
        duration: "2 hours 16 mins",
        commentsCount: 59,
        thumbnail: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=800&auto=format&fit=crop&q=80",
        isFeatured: true,
        studentAvatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "6",
        slug: "from-idea-to-startup-success",
        title: "From Idea to Startup Success",
        subtitle: "Validate your ideas, build MVPs, and scale your tech startup with confidence",
        category: getCategory("freelance-entrepreneurship"),
        creator: PUREPEARL_STUDIO,
        rating: 4.5,
        reviewsCount: 185,
        studentsCount: 3100,
        level: COURSE_LEVELS[0],
        price: 400,
        billingPeriod: "lifetime",
        lessonsCount: 17,
        duration: "2 hours 16 mins",
        commentsCount: 59,
        thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
        isFeatured: true,
        studentAvatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "7",
        slug: "full-stack-web-development",
        title: "Full-Stack Web Development Bootcamp",
        subtitle: "Build modern web apps with React, Next.js, Node.js and TypeScript",
        category: getCategory("web-development"),
        creator: PUREPEARL_STUDIO,
        rating: 4.9,
        reviewsCount: 220,
        studentsCount: 3400,
        level: COURSE_LEVELS[2],
        price: 400,
        billingPeriod: "lifetime",
        lessonsCount: 48,
        duration: "18 hours 30 mins",
        commentsCount: 88,
        thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
        studentAvatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "8",
        slug: "creative-photography-and-lighting",
        title: "Creative Photography & Lighting Masterclass",
        subtitle: "Capture breathtaking portraits and cinematic commercial photography",
        category: getCategory("photography"),
        creator: PUREPEARL_STUDIO,
        rating: 4.7,
        reviewsCount: 130,
        studentsCount: 1600,
        level: COURSE_LEVELS[1],
        price: 250,
        billingPeriod: "lifetime",
        lessonsCount: 22,
        duration: "5 hours 45 mins",
        commentsCount: 42,
        thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&auto=format&fit=crop&q=80",
        studentAvatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "9",
        slug: "social-media-growth-strategy",
        title: "Social Media Growth & Marketing Strategy",
        subtitle: "Build a viral brand, grow organically, and monetize your following",
        category: getCategory("social-media"),
        creator: PUREPEARL_STUDIO,
        rating: 4.6,
        reviewsCount: 195,
        studentsCount: 2750,
        level: COURSE_LEVELS[0],
        price: 125,
        billingPeriod: "lifetime",
        lessonsCount: 19,
        duration: "3 hours 50 mins",
        commentsCount: 65,
        thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80",
        studentAvatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "10",
        slug: "3d-animation-and-motion-graphics",
        title: "3D Animation and Motion Graphics in Blender",
        subtitle: "Create hyper-realistic 3D assets, fluid animations, and visual effects",
        category: getCategory("animation"),
        creator: PUREPEARL_STUDIO,
        rating: 4.8,
        reviewsCount: 155,
        studentsCount: 1980,
        level: COURSE_LEVELS[1],
        price: 100,
        billingPeriod: "lifetime",
        lessonsCount: 34,
        duration: "9 hours 20 mins",
        commentsCount: 71,
        thumbnail: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=80",
        studentAvatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "11",
        slug: "music-production-masterclass",
        title: "Music Production & Sound Design Masterclass",
        subtitle: "Produce radio-ready tracks, mix vocals, and master audio in Ableton Live",
        category: getCategory("music"),
        creator: PUREPEARL_STUDIO,
        rating: 4.9,
        reviewsCount: 210,
        studentsCount: 3200,
        level: COURSE_LEVELS[0],
        price: 25,
        billingPeriod: "lifetime",
        lessonsCount: 26,
        duration: "6 hours 15 mins",
        commentsCount: 84,
        thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&auto=format&fit=crop&q=80",
        studentAvatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        ],
    },
    {
        id: "12",
        slug: "digital-illustration-and-concept-art",
        title: "Digital Illustration & Concept Art in Procreate",
        subtitle: "Character design, digital painting techniques, and composition fundamentals",
        category: getCategory("digital-illustration"),
        creator: PUREPEARL_STUDIO,
        rating: 4.7,
        reviewsCount: 165,
        studentsCount: 2450,
        level: COURSE_LEVELS[0],
        price: 25,
        billingPeriod: "lifetime",
        lessonsCount: 20,
        duration: "4 hours 40 mins",
        commentsCount: 52,
        thumbnail: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&auto=format&fit=crop&q=80",
        studentAvatars: [
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
        ],
    },
];

// -------------------------------------------------------------
// 4. LEARNING PATHS (Explore Diverse Learning Paths Section)
// -------------------------------------------------------------
export const LEARNING_PATHS: LearningPath[] = [
    { id: "1", title: "Design", slug: "design", icon: "design" },
    { id: "2", title: "Development", slug: "development", icon: "development" },
    { id: "3", title: "IT & Software", slug: "it-software", icon: "it-software" },
    { id: "4", title: "Business", slug: "business", icon: "business" },
    { id: "5", title: "Marketing", slug: "marketing", icon: "marketing" },
    { id: "6", title: "Photography", slug: "photography", icon: "photography" },
];

// -------------------------------------------------------------
// 5. TESTIMONIALS (Discover What Our Community Is Saying)
// -------------------------------------------------------------
export const TESTIMONIALS: Testimonial[] = [
    {
        id: "t1",
        name: "Sarah M.",
        role: "Enthusiastic Learner",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        content: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
    },
    {
        id: "t2",
        name: "James L.",
        role: "Lifelong Learner",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
        content: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
    },
    {
        id: "t3",
        name: "Alex B.",
        role: "Inspired Creator",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
        content: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
    },
];



export const SORT_OPTIONS = [
    { label: "Most relevant", value: "relevant" },
    { label: "Most popular", value: "popular" },
    { label: "Highest rated", value: "rating" },
    { label: "Newest", value: "newest" },
    { label: "Price: Low to High", value: "price_asc" },
    { label: "Price: High to Low", value: "price_desc" },
];

export interface FilterTabItem {
    key: "level" | "category";
    label: string;
}

export const FILTER_TABS: FilterTabItem[] = [
    {
        key: "level",
        label: "Level",
    },
    {
        key: "category",
        label: "Category",
    },
];


// -------------------------------------------------------------
// Helper functions
// -------------------------------------------------------------
export const getCourseBySlug = (slug: string): Course | undefined => {
    return COURSES.find((course) => course.slug === slug);
};

export const getCreatorBySlug = (slug: string): Creator | undefined => {
    if (slug === PUREPEARL_STUDIO.slug) {
        return PUREPEARL_STUDIO;
    }
    return PUREPEARL_STUDIO;
};
