
export default function ReviewsInput () {
    return (
        <td className="header-top">
            <fieldset className="relative  flex flex-col px-6">
                <span className="absolute ml-2 text-gray-400">Review</span>
                <input 
                    className="pt-6 pb-1 px-2 shadow" 
                    type="number" 
                    placeholder="4.8"  />
            </fieldset>
        </td>
    )
}