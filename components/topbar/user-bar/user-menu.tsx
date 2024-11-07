"use client"

import { useClickOutside } from "@/hooks"
import { useRef } from "react"
import Link from "next/link"
import { IconStar, IconSettings, IconLogin, IconId } from "@tabler/icons-react"

type UserMenuProps = {
    open?: boolean,
    onClickOutside: () => void
}

export const UserMenu = ({
    open,
    onClickOutside
}: UserMenuProps) => {

    const userMenuRef = useRef(null)
    const isLogged = false

    useClickOutside(() => {
        onClickOutside()
    }, userMenuRef)

    if (open) {
        return (
            <menu
                ref={userMenuRef}
                className="
                    flex
                    flex-col
                    gap-2
                    absolute
                    mt-1
                    top-full
                    right-0
                    min-w-20
                    rounded-xl
                    bg-white
                    border
                    border-gray-200
                    py-2
                    px-4

                    [&_button]:transition
                    [&_button]:flex
                    [&_button]:items-center
                    [&_button]:text-nowrap
                    [&_button:active]:scale-98
                    [&_button:hover]:underline

                    [&_svg]:mr-1
                    [&_svg]:w-[1rem]
                "
            >
                {isLogged ?
                    <>
                        <button>
                            <IconStar />
                            Favoritos
                        </button>
                        <button>
                            <IconSettings />
                            Configurações
                        </button>
                        <hr />
                        <button className="text-red-500">
                            Sair
                        </button>
                    </>
                    :
                    <>
                        <Link href="login">
                            <button>
                                <IconLogin />
                                Entrar
                            </button>
                        </Link>
                        <hr />
                        <Link href="register">
                            <button className="text-teal-400">
                                <IconId />
                                Cadastrar
                            </button>
                        </Link>
                    </>
                }
            </menu>
        )
    }

    return (
        null
    )
}