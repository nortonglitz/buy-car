"use client"

import { InputText } from "@/components"
import { IconFilterFilled, IconRestore, IconX } from "@tabler/icons-react"
import Image from "next/image"
import { useState } from "react"

export const MobileFilter = () => {

    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                className="
                    absolute
                    right-4
                    bottom-8
                    sm:right-8
                    bg-neutral-100/90
                    border
                    rounded-full
                    p-3
                    shadow-md
                    z-30
                "
                onClick={() => setOpen(true)}
            >
                <IconFilterFilled />
            </button>
            {open &&
                <div
                    className="
                        lg:hidden
                        fixed
                        top-0
                        bottom-0
                        right-0
                        left-0
                        bg-black/20
                        z-30
                        flex
                        items-center
                        justify-center
                        p-4
                    "
                >
                    <div
                        className="
                            flex
                            flex-col
                            w-full
                            h-full
                            bg-white
                            rounded-xl
                            overflow-hidden
                            
                            [&>div]:px-4

                            [&_h6]:font-medium
                            [&_h6]:text-sm
                            [&_h6]:mb-2 
                            [&_h6]:text-center

                            [&_hr]:my-4
                        "
                    >
                        <div className="flex items-center justify-between shadow pt-2 h-12">
                            <h1 className="text-2xl">Filtro</h1>
                            <button onClick={() => setOpen(false)}><IconX /></button>
                        </div>
                        <div className="overflow-y-auto flex-1 pb-6 pt-4">
                            <h6 className="font-medium text-sm mb-2">Marca</h6>
                            <div
                                className="
                                    flex
                                    gap-2
                                    overflow-auto
                                    sm:flex-wrap
                                    sm:justify-center

                                    [&_button]:bg-neutral-50
                                    [&_button]:w-20
                                    [&_button]:h-20
                                    [&_button]:rounded-xl
                                    [&_button]:shrink-0
                                    [&_button_img]:w-14
                                    [&_button]:flex
                                    [&_button]:items-center
                                    [&_button]:justify-center
                                    [&_button]:border
                                "
                            >
                                <button>
                                    <Image
                                        src="/brands-logo/fiat.png"
                                        width={113}
                                        height={70}
                                        alt="fiat"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src="/brands-logo/volkswagen.png"
                                        width={115}
                                        height={116}
                                        alt="volkswagen"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src="/brands-logo/chevrolet.png"
                                        width={122}
                                        height={40}
                                        alt="chevrolet"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src="/brands-logo/toyota.png"
                                        width={118}
                                        height={77}
                                        alt="toyota"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src="/brands-logo/hyundai.png"
                                        width={111}
                                        height={58}
                                        alt="toyota"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src="/brands-logo/renault.png"
                                        width={101}
                                        height={131}
                                        alt="renault"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src="/brands-logo/jeep.png"
                                        width={118}
                                        height={47}
                                        alt="jeep"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src="/brands-logo/nissan.png"
                                        width={128}
                                        height={107}
                                        alt="nissan"
                                    />
                                </button>
                                <button>
                                    <Image
                                        src="/brands-logo/honda.png"
                                        width={115}
                                        height={94}
                                        alt="honda"
                                    />
                                </button>
                            </div>
                            <hr />
                            <h6>Localização</h6>
                            <div className="flex flex-col items-center">
                                <InputText placeholder="Localização" />
                                <div
                                    className="
                                        mt-4
                                        flex
                                        flex-col
                                        gap-2
                                        text-neutral-500

                                        [&_label]:cursor-pointer
                                        [&_label]:whitespace-nowrap

                                        [&_input]:mr-2
                                        [&_input]:cursor-pointer
                                        [&_input]:accent-neutral-500
                                    "
                                >
                                    <label htmlFor="distance-50">
                                        <input type="radio" id="distance-50" name="distance" value={50} />
                                        Até 50km
                                    </label>
                                    <label htmlFor="distance-100">
                                        <input type="radio" id="distance-100" name="distance" value={100} />
                                        Até 100km
                                    </label>
                                    <label htmlFor="distance-150">
                                        <input type="radio" id="distance-150" name="distance" value={150} />
                                        Até 150km
                                    </label>
                                    <label htmlFor="distance-200">
                                        <input type="radio" id="distance-200" name="distance" value={200} />
                                        Até 200km
                                    </label>
                                    <label htmlFor="distance-250">
                                        <input type="radio" id="distance-250" name="distance" value={250} />
                                        Até 250km
                                    </label>
                                </div>
                            </div>
                            <hr />
                            <h6>Preço</h6>
                            <div className="flex justify-center gap-4">
                                <InputText placeholder="De" />
                                <InputText placeholder="Até" />
                            </div>
                            <hr />
                            <h6>Ano</h6>
                            <div className="flex justify-center gap-4">
                                <InputText placeholder="De" />
                                <InputText placeholder="Até" />
                            </div>
                            <hr />
                            <h6>Quilometragem</h6>
                            <div className="flex justify-center gap-4">
                                <InputText placeholder="De" />
                                <InputText placeholder="Até" />
                            </div>
                        </div>
                        <div
                            className="
                                border-t
                                border-t-neutral-200
                                bg-white
                                px-6
                                py-4
                                flex
                                justify-center
                                items-center
                                gap-4
                            "
                        >
                            <button
                                className="
                                    bg-white
                                    border
                                    border-neutral-200
                                    p-1
                                    rounded-lg
                                    [&:active]:scale-98
                                "
                            >
                                <IconRestore
                                    className="
                                    transition
                                    [&:active]:-rotate-180
                                "
                                />
                            </button>
                            <button
                                className="
                                bg-sky-400
                                w-full
                                text-white
                                py-2
                                rounded-full
                                font-medium
                                [&:active]:scale-98
                            "
                            >
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}