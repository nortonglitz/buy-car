import { SearchBar } from "./search-bar"
import { UserBar } from "./user-bar"
import { Logo } from "./logo"

export const Topbar = () => {

    return (
        <nav className="flex items-center justify-between px-10 bg-white py-2 drop-shadow-sm">
            <Logo />
            <div className="flex gap-4 items-center">
                <SearchBar />
                <UserBar />
            </div>
        </nav>
    )
}