export interface Creator {
    id: string;
    name: string;
    slug: string;
    role: string;
    avatar: string;
    bio: string;
    productsCount: number;
    followersCount: number;
}

export interface Review {
    id: string;
    userName: string;
    userRole: string;
    userAvatar: string;
    rating: number;
    comment: string;
    date: string;
}

export interface ModuleLesson {
    id: string;
    title: string;
    duration: string;
}

export interface CourseModule {
    id: string;
    moduleNumber: number;
    title: string;
    description: string;
    duration?: string;
    lessons?: ModuleLesson[];
}

export interface Course {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    category: Category;
    creator: Creator;
    rating: number;
    reviewsCount: number;
    studentsCount: number;
    level: "Beginner" | "Intermediate" | "Advanced";
    price: number;
    billingPeriod: string;
    lessonsCount: number;
    duration: string;
    commentsCount: number;
    thumbnail: string;
    isFeatured?: boolean;
    studentAvatars: string[];
    description?: string;
    keyPoints?: string[];
    sneakPeekImages?: string[];
    modules?: CourseModule[];
    reviews?: Review[];
    includes?: string[];
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    icon?: string;
}

export interface LearningPath {
    id: string;
    title: string;
    slug: string;
    icon: string;
}

export interface Testimonial {
    id: string;
    name: string;
    role: string;
    avatar: string;
    content: string;
}
