import { FaChevronDown } from "react-icons/fa6"

const Row = () => {
    return (
        <tr className="text-left hoverable">
            <th><FaChevronDown /></th>
            <th className="p-2">1</th>
            <td className="p-2">888-8-88-88888-8</td>
            <td className="p-2">Text Text Text</td>
            <td className="p-2">John Doe</td>
            <td className="p-2">Text Text, 2025</td>
        </tr>
    )
}

export default Row