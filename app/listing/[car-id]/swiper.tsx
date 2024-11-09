"use client"
import { MouseEventHandler, useEffect, useState } from "react"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { sampleCarImgs } from "@/data/sample-car-imgs"
import Image from "next/image"
import { IconChevronLeft, IconChevronRight, IconX } from "@tabler/icons-react"

import 'swiper/css'

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
                mx-40
                z-10

                [&_button]:px-20
                [&_button:active]:scale-98

                [&_svg]:bg-white
                [&_svg]:border
                [&_svg]:border-black
                [&_svg]:text-black
                [&_svg]:rounded-full

                ${isBeginning ? "[&_button:nth-child(1)]:invisible" : ""}
                ${isEnd ? "[&_button:nth-child(2)]:invisible" : ""}
            `}
        >
            <button onClick={() => swiper.slidePrev()}><IconChevronLeft size="3rem" /></button>
            <button onClick={() => swiper.slideNext()}><IconChevronRight size="3rem" /></button>
        </div>
    )
}

type CarImgsSwiper = {
    onClose: MouseEventHandler<HTMLButtonElement>
}

export const CarImgsSwiper = ({
    onClose
}: CarImgsSwiper) => {
    return (
        <div
            className="
                fixed
                bg-black/20
                h-[100vh]
                w-[100vw]
                z-40
                flex
                items-center
            "
        >
            <button
                className="
                    flex
                    absolute
                    top-10
                    right-[25%]
                    bg-white
                    px-2
                    py-1
                    rounded-lg
                    border
                    border-black
                    [&:active]:scale-98
                "
                onClick={onClose}
            >
                Fechar
                <IconX />
            </button>
            <Swiper
                slidesPerView={1}
            >
                {sampleCarImgs.map((imgSrc, index) => {
                    return (
                        <SwiperSlide key={`car-img-${index}`}>
                            <Image
                                className="object-contain h-[80vh]"
                                src={imgSrc}
                                width={1920}
                                height={1440}
                                alt={`car-img-${index}`}
                            />
                        </SwiperSlide>
                    )
                })}
                <SlideNavigation />
            </Swiper>
        </div>
    )
}