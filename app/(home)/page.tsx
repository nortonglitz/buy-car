"use client"

import { DesktopFilter, MobileFilter } from "./filters"
import { Card } from "./card"
import { MessageBox } from "@/components"
import { Messenger } from "@/components"
import { useMediaQuery } from "@/hooks"

export default function Home() {

  const cards = new Array(40).fill(null)

  const isDesktop = useMediaQuery("lg", "")

  return (
    <>
      {isDesktop ? <DesktopFilter /> : <MobileFilter />}
      <main
        className={`
          absolute
          lg:left-72
          left-0
          xl:left-80
          top-14
          right-0
          pt-4
          px-4
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-4
          bottom-0
          overflow-auto
        `}
      >
        {cards.map((_, index) => {
          return (
            <Card key={`car-card-${index}`} href="/listing/123" />
          )
        })}
      </main>
      {isDesktop &&
        <div className="fixed bottom-0 left-0 right-0 flex justify-end mx-2 gap-2 items-end z-20 h-0">
          <MessageBox sender="Rb - Motors" online />
          <Messenger />
        </div>
      }
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer >
    </>
  );
}
