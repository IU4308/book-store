
export default function ReviewsInput ({ reviews, handleReviews } : ReviewsInput) {
    return (
        <fieldset className="relative  flex flex-col px-6">
            <span className="absolute ml-2 text-gray-400">Review</span>
            <input 
                className="pt-6 pb-1 px-2 shadow" 
                type="number" 
                // value={reviews.toString().replace(/^0+/, '')}
                defaultValue={reviews}
                onChange={(e) => {
                    handleReviews(Number(e.target.value))
                }}
            />
        </fieldset>
    )
}