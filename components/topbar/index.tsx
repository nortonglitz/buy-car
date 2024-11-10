import { UserBar } from "./user-bar"
import { Logo } from "./logo"
import { InputText } from "@/components"
import { IconSearch } from "@tabler/icons-react"

export const Topbar = () => {

    return (
        <nav
            className="
            z-30
            flex
            items-center
            justify-between
            px-10
            bg-white
            py-2
            drop-shadow-sm
            h-14
            fixed
            top-0
            left-0
            right-0
        "
        >
            <Logo />
            <InputText className="w-96 hidden lg:flex" inputClassName="border-neutral-400" icon={IconSearch} iconPos="right" placeholder="Pesquisar" />
            <UserBar />
        </nav>
    )
}