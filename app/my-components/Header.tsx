import LanguageSelector from "./inputs/language";
import SeedInput from "./inputs/seed";
import LikesInput from "./inputs/likes";
import ReviewsInput from "./inputs/reviews";

export default function Header () {
    return (
        <tr className="">
            <LanguageSelector />
            <SeedInput />
            <LikesInput />
            <ReviewsInput />
        </tr>
    )
}
