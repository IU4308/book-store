import { Book } from "../Book";

export default function Review ({ book } : { book: Book }) {
    return (
        <li className="flex flex-col ">
            <span >{book.getReview()}</span>
            <span className="text-gray-400">- {book.faker.person.fullName()}</span>
        </li>
    )
}