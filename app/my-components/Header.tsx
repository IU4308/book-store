import LanguageSelector from "./inputs/language"
import SeedInput from "./inputs/seed"
import LikesInput from "./inputs/likes"
import ReviewsInput from "./inputs/reviews"
import { HeaderProps } from "../definitions"

export default function Header ({
    locale,
    handleLocale,
    seed,
    handleSeed,
    likes,
    handleLikes,
    reviews,
    handleReviews
} : HeaderProps) {
    return (
        <div className="grid grid-cols-4  mx-auto">
            <LanguageSelector 
                locale={locale}
                handleLocale={handleLocale}
            />
            <SeedInput 
                seed={seed}
                handleSeed={handleSeed}
            />
            <LikesInput 
                likes={likes}
                handleLikes={handleLikes}
            />
            <ReviewsInput 
                reviews={reviews}
                handleReviews={handleReviews}
            />
        </div>
    )
}