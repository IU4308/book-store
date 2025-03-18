import { Slider } from "@/components/ui/slider"
import { FaShuffle } from "react-icons/fa6";




const Header = () => {
    return (
        <tr>
            <td colSpan={3}>
                <fieldset className="relative flex flex-col px-2">
                    <span className="absolute top text-gray-400 ml-7">Language</span>
                    <select className="px-6 pt-6 pb-2 shadow" name="" id="">
                        <option value="en-US">English (US)</option>
                        <option value="de-DE">German (DE)</option>
                        <option value="fr-FR">French (FR)</option>
                    </select>
                </fieldset>
            </td>
            <td>
                <fieldset className="relative flex flex-col px-6 ">
                    <span className="absolute px-2 text-left text-gray-400">Seed</span>
                    <FaShuffle className="absolute right-8 top-4" />
                    <input 
                        type="number" 
                        placeholder="1488" 
                        className="pt-6 pb-1 px-2 shadow "
                    />
                </fieldset>
            </td>
            <td>
                <fieldset className="w-[200px] flex flex-col gap-5 px-6">
                    <div className="flex gap-2">
                        <span className="text-gray-400">Likes</span>
                        <span>4.5</span>
                    </div>
                    <Slider defaultValue={[33]} max={100} step={1} />
                </fieldset>
            </td>
            <td>
                <fieldset className="relative  flex flex-col px-6">
                    <span className="absolute ml-2 text-gray-400">Review</span>
                    <input 
                        className="pt-6 pb-1 px-2 shadow" 
                        type="number" 
                        placeholder="8.8"  />
                </fieldset>
            </td>
        </tr>
    )
}

export default Header