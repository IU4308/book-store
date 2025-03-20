'use client'
import { Suspense, useDeferredValue, useState } from "react";
import Header from "./my-components/Header";
import Row from "./my-components/Row";
import InfiniteScroll from 'react-infinite-scroll-component';
import ClipLoader from "react-spinners/ClipLoader";
import { useDebouncedCallback } from "use-debounce";
import { en_US, LocaleDefinition } from "@faker-js/faker";

export default function Home() {
    const [pageCount, setPageCount] = useState(20) 
    const [locale, setLocale] = useState(en_US)
    const [seed, setSeed] = useState(234268);
    const [likes, setLikes] = useState(4);
    const [reviews, setReviews] = useState(5);

    const deferredSeed = useDeferredValue(seed)
    const deferredLikes = useDeferredValue(likes)

    const batch = Array.from({ length: pageCount});

    const handleLocale = (locale: LocaleDefinition) => {
        setLocale(locale)
    }
    
    const handleSeed = (seed: number) => {
        setSeed(seed)
    }

    const handleLikes = (likes: number) => {
        setLikes(likes)
    }

    const handleReviews = useDebouncedCallback((reviews: number) => {
        setReviews(reviews)
    }, 300)
    
    const handleNext = () => {
        setPageCount(pageCount => pageCount + 10)
    }

    return (
        <main className="min-h-screen p-2 ">
            <div className="px-4 py-2 mx-auto">
                <div className="mx-auto xl:w-[1400px] min-w-[1024px] sticky top-0 z-10 bg-white pt-6 pb-6 h-[120px] ">
                    <Header 
                        locale={locale}
                        handleLocale={handleLocale}
                        seed={seed}
                        handleSeed={handleSeed}
                        likes={likes}
                        handleLikes={handleLikes}
                        reviews={reviews}
                        handleReviews={handleReviews}
                    />
                    <ul className="py-2 mx-auto grid grid-cols-27 ">
                        <li className="px-2 "></li>
                        <li className="px-2 ">#</li>
                        <li className="px-2 col-span-6">ISBN</li>
                        <li className="px-2 col-span-6">Title</li>
                        <li className="px-2 col-span-6">Author</li>
                        <li className="px-2 col-span-6">Publisher</li>
                        <li></li>
                    </ul>
                    <div className="h-[1px] bg-[#000]"></div>
                </div>
                <div className="mx-auto xl:w-[1400px] min-w-[1024px] ">
                    <InfiniteScroll
                        dataLength={pageCount}
                        next={handleNext}
                        hasMore={true}
                        loader={(
                            <div className="flex justify-center py-4">
                                <ClipLoader  />
                            </div>
                        )}
                    >
                        {batch.map((_, index) => (
                            <Suspense key={index} fallback={<h2>Loading...</h2>}>
                                <Row 
                                    index = {index}
                                    locale={locale}
                                    seed = {deferredSeed} 
                                    likesAverage = {deferredLikes}
                                    reviewsAverage = {reviews}  
                                />
                            </Suspense>
                        ))}
                    </InfiniteScroll>
                </div>
            </div>
        </main>

        
    );
}