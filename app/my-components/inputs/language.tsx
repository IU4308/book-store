
export default function LanguageSelector () {
    return (
        <td colSpan={3} className="header-top">
            <fieldset className="relative flex flex-col px-2">
                <span className="absolute top text-gray-400 ml-7">Language</span>
                <select className="px-6 pt-6 pb-2 shadow" name="" id="">
                    <option value="en-US">English (US)</option>
                    <option value="de-DE">German (DE)</option>
                    <option value="fr-FR">French (FR)</option>
                </select>
            </fieldset>
        </td>
    )
}