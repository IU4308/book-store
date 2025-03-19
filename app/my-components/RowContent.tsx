import Image from "next/image";

export default function RowContent () {
    return (
        <tr className="">
            <td colSpan={6} className="bg-gray-50 py-8 px-20 flex-flex-col">
                <div className="flex gap-10">
                    <Image 
                        className="w-[90px] h-[140px] object-cover"
                        src={'/cover.jpg'}
                        alt='cover'
                        width={183}
                        height={275}
                    />
                    <div>
                        <ul className="flex flex-col gap-2 ">
                            <li className="font-bold text-4xl ">Title</li>
                            <li className="font-bold text-xl">by Author</li>
                            <li className="text-gray-400">Publisher</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-2 py-4">
                    <span className="font-bold text-xl">Reviews</span>
                    <ul className="flex flex-col gap-2">
                        <li className="flex flex-col ">
                            <span>1 review test test test test</span>
                            <span className="text-gray-400">- review Author</span>
                        </li>
                        <li className="flex flex-col ">
                            <span>1 review test test test test</span>
                            <span className="text-gray-400">- review Author</span>
                        </li>
                        <li className="flex flex-col ">
                            <span>1 review test test test test</span>
                            <span className="text-gray-400">- review Author</span>
                        </li>
                        <li className="flex flex-col ">
                            <span>1 review test test test test</span>
                            <span className="text-gray-400">- review Author</span>
                        </li>
                    </ul>
                </div>
            </td>
        </tr>
    )
}
