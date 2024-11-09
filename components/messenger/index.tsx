"use client"

import { IconSend2, IconX } from "@tabler/icons-react"
import { useState } from "react"

const Circle = () => {
    return (
        <div
            className={`
                border
                bg-green-400
                w-3
                h-3
                rounded-full
                mr-2
            `}
        />
    )
}

type MessageProps = {
    text?: string
    time?: string
    self?: boolean
}

const Message = ({
    text,
    time,
    self
}: MessageProps) => {
    return (
        <div
            className={`
                relative
                text-neutral-800
                w-fit
                pl-2
                pr-9
                pb-1
                rounded-md
                break-words
                max-w-64

                ${self ? "bg-sky-100" : "bg-gray-100"}
                ${self ? "self-end" : "self-start"}
            `}
        >
            {text}
            <span
                className="
                absolute
                right-[0.3rem]
                bottom-0
                text-[0.6rem]
                text-neutral-500
            "
            >
                {time}
            </span>
        </div>
    )
}

export const Messenger = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <div
                className={`
                    fixed
                    bottom-0
                    right-5
                    w-80
                    ${open ? "h-80" : "h-10"}
                    z-20
                    bg-neutral-50
                    rounded-t-lg
                    border
                    border-neutral-400
                    flex
                    flex-col
                `}
            >
                <button
                    className="
                        flex
                        items-center
                        justify-between
                        font-medium
                        px-2
                        py-1
                        w-full
                        h-10
                    "
                    onClick={() => setOpen(!open)}
                >
                    <div className="flex items-center">
                        <Circle />
                        Norton Glitz
                    </div>
                    <IconX
                        className="
                            transition
                            text-neutral-500
                            [&:hover]:text-black
                        "
                    />
                </button>
                <hr className="border-neutral-200 shadow" />
                <div className="h-56 px-2 pt-3 gap-2 flex flex-col overflow-auto">
                    <Message text="Bom dia, tudo bem?" self time="08:37" />
                    <Message text="Bom dia, tudo e você?" time="08:37" />
                    <Message text="Também, qual é o valor do carro à vista?" self time="08:38" />
                    <Message text="Venha aqui conhecer a nossa loja, e fazer um test-drive. O valor é de R$ 87.000." time="08:39" />
                </div>
                <div className="flex items-center mx-2 gap-1 h-14">
                    <input
                        type="text"
                        placeholder="Mensagem"
                        className="
                            rounded-full
                            shadow
                            bg-sky-50
                            py-1
                            px-3
                            border
                            border-neutral-400
                            flex-1
                        "
                    />
                    <button className="bg-sky-400 text-white rounded-full p-1 [&:active]:scale-98">
                        <IconSend2 />
                    </button>
                </div>
            </div>
        </>
    )
}