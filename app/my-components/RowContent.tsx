'use client'
import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import Review from "./Review";
import { Book } from "../Book";


export default function RowContent ({ book } : { book: Book }) {
    const reviews = Array.from({ length: book!.reviews! }) ;
    return (
        <section className="py-8 px-20 flex-flex-col">
            <div className="relative flex gap-10">
                <div className="text-xs absolute top-0 w-[135px] h-[210px] flex flex-col justify-between items-center p-2 font-medium">
                    <span>{book?.author}</span>
                    <span>{book?.title}</span>
                </div>
                <Image 
                    className="border-3 w-[135px] h-[210px] object-cover opacity-30"
                    src={book!.getBookCover()}
                    alt='cover'
                    width={183}
                    height={275}
                />
                <div>
                    <ul className="flex flex-col gap-2 ">
                        <li className="font-bold text-4xl flex gap-4 items-end ">
                            <span>{book?.title}</span>
                        </li>
                        <li className="font-bold text-xl">by {book?.author}</li>
                        <li className="text-gray-400">{book?.publisher}</li>
                        <li className="flex gap-1 items-center text-blue-500">
                            <span>{book?.likes}</span>
                            <AiFillLike className="" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-2 py-4">
                <span className="font-bold text-xl">Reviews</span>
                <ul className="flex flex-col gap-2">
                    {reviews.map((review, index) => (
                        <Review key={index} book={book!} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
