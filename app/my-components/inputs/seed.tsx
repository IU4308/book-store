'use client'
import { FaShuffle } from "react-icons/fa6";
import { Random } from "random-js";

export default function SeedInput ({
    seed,
    handleSeed,
} : {
    seed: number;
    handleSeed: (seed: number) => void
}) {
    const random = new Random();
    return (
        <fieldset className="relative flex flex-col px-6 ">
            <span className="absolute px-2 text-left text-gray-400">Seed</span>
            <FaShuffle 
                className="absolute right-8 top-4" 
                onClick={() => {
                    handleSeed(random.integer(0,4294967295))
                }}
            />
            <input 
                type="number" 
                max={9_007_199_254_740_991}
                className="pt-6 pb-1 px-2 shadow "
                // defaultValue={seed}
                value={seed}
                onChange={(e) => {
                    handleSeed(Number(e.target.value))
                    if (Number(e.target.value) >= Math.pow(2, 53)) {
                        handleSeed(Math.pow(2, 53) - 1)
                    }
                }}
            />
            {seed === Math.pow(2, 53) - 1 &&  <span className="absolute text-xs text-red-500 top-[-20px]">
                Seed cannot be bigger or equal to 2^53
            </span>}
        </fieldset>
    )
}