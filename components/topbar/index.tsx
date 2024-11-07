import { UserBar } from "./user-bar"
import { Logo } from "./logo"
import { InputText } from "@/components"
import { IconSearch } from "@tabler/icons-react"

export const Topbar = () => {

    return (
        <nav className="flex items-center justify-between px-10 bg-white py-2 drop-shadow-sm">
            <Logo />
            <div className="flex gap-4 items-center">
                <InputText icon={IconSearch} iconPos="right" placeholder="Pesquisar" />
                <UserBar />
            </div>
        </nav>
    )
}