"use client"

import { useClickOutside, useMediaQuery } from "@/hooks"
import { useRef } from "react"
import Link from "next/link"
import { IconMessage, IconSettings, IconLogin, IconId, IconSearch } from "@tabler/icons-react"
import { InputText } from "@/components/inputs/text"

type UserMenuProps = {
    open?: boolean,
    onClickOutside: () => void
}

export const UserMenu = ({
    open,
    onClickOutside
}: UserMenuProps) => {

    const userMenuRef = useRef(null)
    const isLogged = true

    const isMobile = useMediaQuery("", "lg")

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
                {isMobile &&
                    <>
                        <InputText placeholder="Pesquisar" className="min-w-60 mt-2" inputClassName="border-neutral-400" icon={IconSearch} iconPos="right" />
                        <hr className="my-2" />
                    </>
                }
                {isLogged ?
                    <>
                        <button>
                            <IconMessage />
                            Mensagens
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
                        <Link href="/auth/login">
                            <button>
                                <IconLogin />
                                Entrar
                            </button>
                        </Link>
                        <hr />
                        <Link href="/auth/register">
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