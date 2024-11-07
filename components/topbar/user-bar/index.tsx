"use client"

import { IconUserCircle, IconMenu2, IconBellFilled } from "@tabler/icons-react"
import { UserMenu } from "./user-menu"
import Image from "next/image"
import { MouseEventHandler, useState } from "react"

export const UserBar = () => {

    const isLogged = true
    const hasAvatar = false
    const [userMenuOpen, setMenuUserMenu] = useState(false)

    const handleUserBarClick: MouseEventHandler<HTMLButtonElement> = () => {
        setMenuUserMenu(true)
    }

    const handleUserMenuClickOutside = () => {
        setMenuUserMenu(false)
    }

    return (
        <>
            {isLogged &&
                <button
                    className="
                        relative
                        p-1
                        rounded-full
                        border
                        border-neutral-200
                        [&:active]:scale-98
                    "
                >
                    <IconBellFilled
                        className="
                            text-yellow-400
                            rounded-full
                        "
                    />
                    <div
                        className="
                            absolute
                            bg-red-400
                            px-1
                            rounded-full
                            w-3
                            h-3
                            flex
                            items-center
                            justify-center
                            -top-0.5
                            -right-0.5
                        "
                    />
                </button>
            }
            <div className="relative">
                <button
                    onClick={handleUserBarClick}
                    className="
                        transition
                        flex
                        gap-2
                        items-center
                        rounded-full
                        border
                        border-neutral-200
                        px-2
                        py-1

                        [&:active]:scale-98
                    "
                >
                    {isLogged ?
                        <>
                            {hasAvatar ?
                                <Image
                                    className="
                                    rounded-full
                                    bg-neutral-100
                                    w-8
                                    h-8
                                "
                                    src="/user-avatar.png"
                                    width={32}
                                    height={32}
                                    alt="User avatar"
                                />
                                :
                                <IconUserCircle className="text-neutral-200 rounded-full h-8 w-8" />
                            }
                            <IconMenu2 />
                        </>
                        :
                        <>
                            <IconUserCircle className="text-neutral-200 rounded-full h-8 w-8" />
                            <IconMenu2 />
                        </>
                    }
                </button>
                <UserMenu open={userMenuOpen} onClickOutside={handleUserMenuClickOutside} />
            </div>
        </>
    )
}