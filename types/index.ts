export interface Creator {
    id: string;
    name: string;
    slug: string;
    role: string;
    avatar: string;
    bio: string;
    productsCount: number;
    followersCount: number;
    studentsCount?: number;
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

export interface RatingDistribution {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
}

export interface ModuleLesson {
    id: string;
    title: string;
    duration: string;
    type?: "video" | "article" | "quiz";
    isPreview?: boolean;
    isCompleted?: boolean;
    videoUrl?: string;
}

export interface CourseModule {
    id: string;
    moduleNumber: number;
    title: string;
    description: string;
    duration?: string;
    lessonsCount?: number;
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
    level: CourseLevel;
    price: number;
    billingPeriod: string;
    lessonsCount: number;
    duration: string;
    commentsCount: number;
    thumbnail: string;
    isFeatured?: boolean;
    studentAvatars: string[];
    // Extended Course Details from Figma
    videoThumbnail?: string;
    videoUrl?: string;
    sectionsCount?: number;
    description?: string;
    keyPoints?: string[];
    sneakPeekImages?: string[];
    modules?: CourseModule[];
    reviews?: Review[];
    includes?: string[];
    ratingDistribution?: RatingDistribution;
    language?: string;
    lastUpdated?: string;
    certificate?: boolean;
    requirements?: string[];
    targetAudience?: string[];
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    icon?: string;
}
export interface CourseLevel {
    id: string;
    name: string;
    slug: string;
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


export interface CourseFilterParams {
    search: string;
    category: string;
    level: string;
    price: string;
    sort: string;
    page: number;
    limit: number;
}
