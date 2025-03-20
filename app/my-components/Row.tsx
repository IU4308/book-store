'use client'
import { memo, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6"
import RowContent from "./RowContent"
import { useState } from "react"
import { Book } from '../Book';
import { RowProps } from '../definitions';
import { AiFillLike } from 'react-icons/ai';

export default memo(function Row ({ 
    locale,
    inputSeed, 
    index, 
    likesAverage,
    reviewsAverage
} : RowProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [book, setBook] = useState<Book | null>(null);

    const seed = inputSeed + index + locale?.metadata?.title?.length! + locale?.metadata?.endonym?.length!;

    const toggle = () => {
        setIsExpanded(!isExpanded)
    }

    const handleBook = (book: Book) => {
        setBook(book)
    }

    useEffect(() => {
        handleBook(new Book(locale, seed, likesAverage, reviewsAverage))
    }, [locale, inputSeed, likesAverage, reviewsAverage, index])

    return (
        <>
            <ul 
                className="hoverable cursor-pointer grid grid-cols-27 " 
                onClick={toggle}
            >
                <li className="flex justify-center items-center">
                    {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                </li>
                <li className="p-2 font-bold">{index + 1}</li>
                <li className="p-2 col-span-6">{book?.isbn}</li>
                <li className="p-2 col-span-6">{book?.title}</li>
                <li className="p-2 col-span-6">{book?.author}</li>
                <li className="p-2 col-span-6">{book?.publisher}, {book?.release}</li>
                <li className='flex gap-1 items-center text-blue-500'>
                    <span>{book?.likes}</span>
                    <AiFillLike className="" />
                </li>
            </ul>

            {isExpanded && (
                <RowContent 
                    book={book!}
                />)}
        </>
    )
})
