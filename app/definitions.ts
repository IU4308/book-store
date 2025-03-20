import { LocaleDefinition } from "@faker-js/faker";

export interface HeaderProps {
    locale: LocaleDefinition;
    handleLocale: (local: LocaleDefinition) => void;
    seed: number;
    handleSeed: (seed: number) => void;
    likes: number;
    handleLikes: (likes: number) => void;
    reviews: number;
    handleReviews: (reviews: number) => void;
}

export interface RowProps {
    locale: LocaleDefinition;
    seed: number;
    index: number;
    likesAverage: number;
    reviewsAverage: number;
}

export interface LanguageSelectorProps {
    locale: LocaleDefinition;
    handleLocale: (local: LocaleDefinition) => void;
}

export interface LikesInputProps {
    likes: number;
    handleLikes: (n: number) => void;
}

export interface ReviewsInputProps {
    reviews: number;
    handleReviews: (reviews: number) => void;
}