"use client"

import { IconUser, IconAt, IconLockPassword } from "@tabler/icons-react"
import { useState } from "react"
import { Forms } from "./forms"

type SelectedMenu = "name" | "email" | "password"

export default function ProfileSettings() {

    const [selectedMenu, setSelectedMenu] = useState<SelectedMenu>("name")

    const handleMenuClick = (selectedMenu: SelectedMenu) => {
        setSelectedMenu(selectedMenu)
    }

    return (
        <>
            <h1 className="text-2xl text-left font-medium">Configurações</h1>
            <p className="text-neutral-600 font-thin">Aqui você encontrará informações sobre o seu perfil</p>
            <div className="flex mt-4 [&_form]:mx-4">
                <div className="border-r border-neutral-200 mr-4">
                    <div
                        className="
                            flex
                            flex-col
                            items-start
                            justify-start
                            gap-2
                            mt-4
                            mr-6

                            [&_button]:flex
                            [&_button]:items-center
                            [&_button:hover]:underline
                            [&_button:active]:scale-98

                            [&_svg]:h-[1rem]
                        "
                    >
                        <button
                            onClick={() => handleMenuClick("name")}
                            className={`${selectedMenu === "name" ? "text-black" : "text-neutral-400"}`}
                        >
                            <IconUser />
                            Nome
                        </button>
                        <button
                            onClick={() => handleMenuClick("email")}
                            className={`${selectedMenu === "email" ? "text-black" : "text-neutral-400"}`}
                        >
                            <IconAt />
                            E-mail
                        </button>
                        <button
                            onClick={() => handleMenuClick("password")}
                            className={`${selectedMenu === "password" ? "text-black" : "text-neutral-400"}`}
                        >
                            <IconLockPassword />
                            Senha
                        </button>
                    </div>
                </div>
                <Forms type={selectedMenu} />
            </div>
        </>
    )
}