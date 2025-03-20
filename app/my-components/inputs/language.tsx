import { LanguageSelectorProps } from "@/app/definitions";
import { de, en_US, fr, LocaleDefinition } from "@faker-js/faker";

export default function LanguageSelector ({ locale, handleLocale} : LanguageSelectorProps) {
    const locales: Record<string, LocaleDefinition> = {
        en_US: en_US,
        de: de,
        fr: fr
    }
    return (
        <fieldset className="relative flex flex-col px-2">
            <span className="absolute top text-gray-400 ml-7">Language</span>
            <select 
                className="px-6 pt-6 pb-2 shadow" name="" id=""
                value={locale.metadata?.code as string}
                onChange={(e) => {
                    handleLocale(locales[e.target.value])
                }}
            >
                <option value='en_US'>English (US)</option>
                <option value='de'>German (DE)</option>
                <option value='fr'>French (FR)</option>
            </select>
        </fieldset>
    )
}