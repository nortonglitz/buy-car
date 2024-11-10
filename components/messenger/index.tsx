"use client"

import { IconMessage, IconMinus } from "@tabler/icons-react"
import { useState } from "react"
import { sampleCarImgs } from "@/data/sample-car-imgs"
import Image from "next/image"

type MessagePreviewProps = {
    sender: string
    lastMsg: string
    msgDate: string // Mudar para Date quando tiver os dados
}

const MessagePreview = ({
    sender,
    lastMsg,
    msgDate
}: MessagePreviewProps) => {
    return (
        <button
            className="
                py-2
                px-2
                bg-white
                flex
                items-center
                gap-2
                border-b
                [&:hover]:bg-neutral-100
            "
        >
            <Image
                src={sampleCarImgs[0]}
                alt="avatar-imgs-1"
                width={400}
                height={400}
                className="w-10 h-10 rounded-full border border-neutral-500 object-cover"
            />
            <div
                className="
                    flex
                    flex-col
                    text-left
                    text-sm
                    overflow-hidden
                    gap-1
                    w-full

                    [&_p]:truncate
                    [&_p]:leading-none
                "
            >
                <div className="flex items-baseline justify-between">
                    <p className="font-medium">{sender}</p>
                    <p className="text-[0.6rem] text-neutral-400">{msgDate}</p>
                </div>
                <p className="text-neutral-500">{lastMsg}</p>
            </div>
        </button>
    )
}

export const Messenger = () => {

    const [open, setOpen] = useState(true)

    return (
        <div
            className={`
                w-80
                ${open ? "h-fit" : "h-10"}
                h-10
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
                    text-center
                    font-medium
                    px-2
                    py-1
                    w-full
                    h-10
                "
                onClick={() => setOpen(!open)}
            >
                <div className="flex justify-between gap-1">
                    <div className="flex gap-1">
                        <IconMessage />
                        Mensagens
                    </div>
                    {open && <IconMinus className="text-neutral-500 [&:hover]:text-black" />}
                </div>
            </button>
            <hr className="border-neutral-200 shadow" />
            {open &&
                <>
                    <MessagePreview sender="Prime Veículos Premium" lastMsg="Aceitamos a sua proposta!" msgDate="Hoje" />
                    <MessagePreview sender="Lt4 Motors" lastMsg="Devolve meu dinheiro seu safado!" msgDate="Hoje" />
                    <MessagePreview sender="Stuttgart" lastMsg="O Porsche ainda está te esperando." msgDate="Ontem" />
                    <MessagePreview sender="Front Motors" lastMsg="Bom dia" msgDate="Ontem" />
                    <MessagePreview sender="Audi Cnter Lapa Sorana" lastMsg="Devolve meu dinheiro seu safado!" msgDate="8 nov" />
                    <MessagePreview sender="Next Motors" lastMsg="Devolve meu dinheiro seu safado!" msgDate="7 nov" />
                    <MessagePreview sender="Iguatemi Automoveis" lastMsg="Devolve meu dinheiro seu safado!" msgDate="7 nov" />
                    <MessagePreview sender="Rb - Motors" lastMsg="Devolve meu dinheiro seu safado!" msgDate="7 nov" />
                </>
            }
        </div>
    )
}