"use client"

import { sampleCarImgs } from "@/data/sample-car-imgs"
import { IconPhoto } from "@tabler/icons-react"
import { CarImgsSwiper } from "./swiper"
import Image from "next/image"
import { useState } from "react"

export default function ListingInfo() {

    const carImgs = sampleCarImgs.slice(0, 3)
    const [swiperOpen, setSwiperOpen] = useState(false)

    return (
        <main className="flex-col flex items-center">
            {swiperOpen && <CarImgsSwiper onClose={() => setSwiperOpen(false)} />}
            <div className="w-4/5 relative">
                <div
                    className="
                        absolute
                        top-0
                        left-0
                        right-0
                        flex
                        justify-center
                        border-2
                        border-neutral-500
                        shadow
                        rounded-b-[6rem]
                        overflow-hidden
                        h-80

                        [&:hover]:cursor-pointer
                        group
                    "
                    onClick={() => setSwiperOpen(true)}
                >
                    <div
                        className="
                            transition
                            absolute
                            top-0
                            left-0
                            right-0
                            bottom-0
                            group-hover:bg-neutral-500/10
                            group-active:bg-neutral-500/20
                        "
                    />
                    <div
                        className="
                            border
                            border-neutral-500
                            absolute
                            right-0
                            bg-white/50
                            top-20
                            mr-10
                            flex
                            font-medium
                            text-xs
                            items-center
                            gap-2
                            px-2
                            py-1
                            rounded-sm
                            uppercase
                            select-none
                        "
                    >
                        <p>Ver fotos</p>
                        <IconPhoto />
                    </div>
                    {carImgs.map((imgSrc, index) => {
                        return (
                            <Image
                                className="flex-1 border object-cover"
                                key={`listing-img-${index}`}
                                src={imgSrc}
                                width={1920}
                                height={1440}
                                alt={`listing-img-${index}`}
                            />
                        )
                    })}
                </div>
                <div
                    className="
                        absolute
                        shadow-md
                        border-2
                        border-neutral-500
                        bg-white
                        h-12
                        top-[18.5rem]
                        right-0
                        left-0
                        mx-40
                        rounded-full
                        flex
                        justify-center
                        items-center
                    "
                >
                    <h1 className="text-2xl">
                        <span className="font-light uppercase">Maserati</span>
                        {" "}
                        Granturismo
                    </h1>
                </div>
                <div className="bg-white pt-96 pb-10 px-10 border left-0 right-0 mx-8">
                    <div className="flex justify-between">
                        <div className="flex flex-col flex-1">
                            <div
                                className="
                                    flex
                                    justify-around

                                    [&_div_p:nth-child(1)]:uppercase
                                    [&_div_p:nth-child(1)]:text-xs
                                    [&_div_p:nth-child(1)]:font-thin

                                    [&_div_p:nth-child(2)]:font-medium
                                "
                            >
                                <div>
                                    <p>Modelo/Ano</p>
                                    <p>2018/2018</p>
                                </div>
                                <div>
                                    <p>Quilometragem</p>
                                    <p>2.679</p>
                                </div>
                                <div>
                                    <p>Localização</p>
                                    <p>Sorocaba - SP</p>
                                </div>
                            </div>
                            <hr className="my-4 border-neutral-200" />
                            <div>
                                <p className="uppercase text-xs font-thin mb-1">Sobre</p>
                                <p className="text-justify font-thin">
                                    Cor Rosso Italiano, Motor V8 aspirado com 460cv, Volante multifuncional em carbono com paddle shift, Cambio automático de 6 marchas e dupla embreagem, Modo de condução Sport, Interior total couro bicolor Nero/Cuoio com costuras Brancas, Bancos com ajustes elétricos Aquecimento e pacote de memória, Acabamento interno em fibra de carbono, Multimidia central com tela touch screen, Sistema de navegação GPS, Sistema de Som Harman/Kardon. Entregamos em todo Brasil!!. Outros Opcionais: Controle de estabilidade, Kit Multimídia.
                                </p>
                            </div>
                        </div>
                        <div className="pl-10">
                            <p className="text-5xl text-right">R$ 1.400.000</p>
                            <button
                                className="
                                    transition
                                    bg-sky-500
                                    text-white
                                    w-full
                                    py-2
                                    rounded-full
                                    text-lg
                                    font-semibold
                                    [&:active]:scale-98
                                    mt-4
                                    mb-8
                                "
                            >
                                Enviar mensagem
                            </button>
                            <div className="flex flex-col items-end border px-4 py-2 rounded-xl">
                                <p className="uppercase text-xs font-thin self-center mb-2">Anunciante</p>
                                <h2 className="text-xl">Prime Veículos Premium</h2>
                                <p className="text-lg font-thin">(15) 3042-0859</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}