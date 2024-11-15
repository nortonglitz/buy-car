"use client"

import Image from "next/image"
import { sampleCarImgs } from "@/data/sample-car-imgs"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react"
import { useEffect, useState } from "react"
import Link from "next/link"

const SlideNavigation = () => {

    const swiper = useSwiper()

    const [isBeginning, setIsBeginning] = useState(true)
    const [isEnd, setIsEnd] = useState(false)


    useEffect(() => {
        if (swiper) {
            const handleSlideChange = () => {
                setIsBeginning(swiper.isBeginning)
                setIsEnd(swiper.isEnd)
            };

            swiper.on('slideChange', handleSlideChange)

            handleSlideChange()

            return () => {
                swiper.off('slideChange', handleSlideChange)
            };
        }
    }, [swiper])

    return (
        <div
            className={`
                flex
                justify-between
                absolute
                top-0
                right-0
                left-0
                bottom-0
                z-10

                [&_button]:invisible
                [&_button]:px-2
                [&:hover_button]:visible
                [&_button]:opacity-30
                [&_button:active]:opacity-55

                [&_svg]:bg-neutral-200
                [&_svg]:text-black
                [&_svg]:rounded-full

                ${isBeginning ? "[&_button:nth-child(1)]:invisible" : ""}
                ${isEnd ? "[&_button:nth-child(2)]:invisible" : ""}
            `}
        >
            <button onClick={() => swiper.slidePrev()}><IconChevronLeft size="2rem" /></button>
            <button onClick={() => swiper.slideNext()}><IconChevronRight size="2rem" /></button>
        </div>
    )
}

type CardProps = {
    href?: string
}

export const Card = ({
    href = ""
}: CardProps) => {

    return (
        <div
            className="
                bg-white
                rounded-3xl
                border
                border-neutral-200
                overflow-hidden
                shadow-sm
                h-[25rem]
                flex
                flex-col
                select-none
            "
        >
            <div className="relative">
                <Swiper slidesPerView={1} lazyPreloadPrevNext={1}>
                    <SlideNavigation />
                    {sampleCarImgs.map((imgSrc, index) => {
                        return (
                            <SwiperSlide key={`listing-image-${index}`}>
                                <Image loading="lazy" src={imgSrc} width={1920} height={1440} alt={`listing image ${index}`} className="h-60 object-cover" />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
            <Link href={href} className="flex flex-1" target="_blank" rel="noopener noreferrer">
                <div className="flex flex-col px-4 pt-2 pb-1 [&_p]:leading-none flex-1 [&:hover]:cursor-pointer [&:active]:bg-neutral-100 transition">
                    <div className="flex justify-between max-h-16 text-ellipsis overflow-hidden">
                        <div>
                            <p className="text-xs uppercase">Maserati</p>
                            <p>Granturismo</p>
                        </div>
                        <div className="text-right text-neutral-400">
                            <p className="text-sm">2018/2018</p>
                            <p className="text-xs">2.679 km</p>
                        </div>
                    </div>
                    <p className="font-medium flex-1 flex items-end justify-end">R$ 1.400.000</p>
                    <div>
                        <hr className="my-2 border-neutral-200" />
                        <div className="flex justify-between my-2 text-xs text-right">
                            <p>Prime Veículos Premium</p>
                            <p>(15) 3042-0859</p>
                        </div>
                        <hr className="border-neutral-200 my-2" />
                        <div className="text-xs text-center">
                            <p>Sorocaba - SP</p>
                            <p className="text-gray-400 font-extralight mt-0.5">Anunciado há 6 dias</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}