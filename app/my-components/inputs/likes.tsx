import { LikesInputProps } from "@/app/definitions"
import { Slider } from "@/components/ui/slider"

export default function LikesInput ({ likes, handleLikes } : LikesInputProps) {
    return (
        <fieldset className="w-[200px] flex flex-col gap-5 px-6">
            <div className="flex gap-2">
                <span className="text-gray-400">Likes</span>
                <input 
                    type="number" 
                    className=" focus:outline-none"
                    min={0.01}
                    value={likes}
                    onChange={(e) => {
                        handleLikes(Number(e.target.value))
                    }}
                />
            </div>
            <Slider 
                value={[likes]}
                onValueChange={([num]) => {
                    handleLikes(num)
                }}
                max={10} 
                step={0.05} 
                
            />
        </fieldset>
    )
}