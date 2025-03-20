'use client'
import { memo, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa6"
import RowContent from "./RowContent"
import { useState } from "react"
import { Book } from '../Book';
import { RowProps } from '../definitions';

export default memo(function Row ({ 
    locale,
    seed, 
    index, 
    likesAverage,
    reviewsAverage
} : RowProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [book, setBook] = useState<Book | null>(null);

    const toggle = () => {
        setIsExpanded(!isExpanded)
    }

    const handleBook = (book: Book) => {
        setBook(book)
    }

    useEffect(() => {
        handleBook(new Book(locale, seed + index, likesAverage, reviewsAverage))
    }, [locale, seed, likesAverage, reviewsAverage, index])

    return (
        <>
            <ul 
                className="hoverable cursor-pointer grid grid-cols-26 " 
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
            </ul>

            {isExpanded && (
                <RowContent 
                    book={book!}
                />)}
        </>
    )
})
