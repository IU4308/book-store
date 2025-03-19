import { Slider } from "@/components/ui/slider"

export default function LikesInput () {
    return (
        <td className="header-top">
            <fieldset className="w-[200px] flex flex-col gap-5 px-6">
                <div className="flex gap-2">
                    <span className="text-gray-400">Likes</span>
                    <span>4.5</span>
                </div>
                <Slider defaultValue={[33]} max={100} step={1} />
            </fieldset>
        </td>
    )
}