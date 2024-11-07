import { InputText } from "@/components"
import { IconRestore } from "@tabler/icons-react"
import Image from "next/image"

export const Filter = () => {
    return (
        <aside
            className="
                w-80
                bg-white
                pt-4
                px-4
                pb-40
                shadow-sm
                fixed
                top-14
                bottom-0
                overflow-y-auto
                z-0
            "
        >
            <div>
                <h6 className="font-medium text-sm mb-2 text-center">Marca</h6>
                <div
                    className="
                        grid
                        grid-cols-3
                        gap-4

                        [&_button]:bg-neutral-50
                        [&_button]:w-20
                        [&_button]:h-20
                        [&_button]:flex
                        [&_button]:justify-center
                        [&_button]:items-center
                        [&_button]:border
                        [&_button]:rounded-lg
                        [&_button]:cursor-pointer
                        [&_button:active]:scale-98

                        [&_button_img]:w-14
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
            </div>
            <hr className="my-6" />
            <div>
                <h6 className="font-medium text-sm mb-2 text-center">Localização</h6>
                <div className="flex flex-col">
                    <InputText className="w-full" placeholder="Localização" />
                    <div
                        className="
                            mt-4
                            ml-4
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
            </div>
            <hr className="my-6" />
            <div>
                <h6 className="font-medium text-sm mb-2 text-center">Preço</h6>
                <div className="flex gap-4">
                    <InputText placeholder="De" />
                    <InputText placeholder="Até" />
                </div>
            </div>
            <hr className="my-6" />
            <div>
                <h6 className="font-medium text-sm mb-2 text-center">Ano</h6>
                <div className="flex gap-4">
                    <InputText placeholder="De" />
                    <InputText placeholder="Até" />
                </div>
            </div>
            <hr className="my-6" />
            <div>
                <h6 className="font-medium text-sm mb-2 text-center">Quilometragem</h6>
                <div className="flex gap-4">
                    <InputText placeholder="De" />
                    <InputText placeholder="Até" />
                </div>
            </div>
            <div
                className="
                    border-t
                    border-t-neutral-200
                    fixed
                    bottom-0
                    bg-white
                    z-10
                    w-80
                    left-0
                    h-20
                    px-6
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
        </aside>
    )
}