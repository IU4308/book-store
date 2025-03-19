import { FaShuffle } from "react-icons/fa6";

export default function SeedInput () {
    return (
        <td className="header-top">
            <fieldset className="relative flex flex-col px-6 ">
                <span className="absolute px-2 text-left text-gray-400">Seed</span>
                <FaShuffle className="absolute right-8 top-4" />
                <input 
                    type="number" 
                    placeholder="11111111" 
                    className="pt-6 pb-1 px-2 shadow "
                />
            </fieldset>
        </td>
    )
}