'use client'
import { FaChevronDown } from "react-icons/fa6"
import RowContent from "./RowContent"
import { useState } from "react"

export default function Row () {
    const [isExpanded, setIsExpanded] = useState(false);
    const toggle = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <>
            <tr className="text-left hoverable" onClick={toggle}>
                <td><FaChevronDown /></td>
                <td className="p-2 font-bold">1</td>
                <td className="p-2">888-8-88-88888-8</td>
                <td className="p-2">Text Text Text</td>
                <td className="p-2">John Doe</td>
                <td className="p-2">Text Text, 2025</td>
            </tr>

            {isExpanded && <RowContent />}
        
        </>
    )
}
