import { IconSearch } from "@tabler/icons-react"

export const SearchBar = () => {
    return (
        <div className="relative">
            <input
                type="text"
                className="
                    h-fit
                    bg-neutral-50
                    rounded-full
                    border-neutral-200
                    border
                    pl-3
                    pr-10
                    py-1
                "
                placeholder="Pesquisar"
            />
            <IconSearch
                className="
                    absolute
                    top-1
                    right-2
                    text-neutral-200
                    cursor-text
                "
            />
        </div>
    )
}