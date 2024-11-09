import { Filter } from "./filter"
import { Card } from "./card"
import { MessageBox } from "@/components"
import { Messenger } from "@/components"

export default function Home() {

  const cards = new Array(40).fill(null)

  return (
    <>
      <Filter />
      <main
        className="
          absolute
          left-72
          xl:left-80
          top-14
          right-0
          pt-4
          px-4
          grid
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-4
          bottom-0
          overflow-auto
        "
      >
        {cards.map((_, index) => {
          return (
            <Card key={`car-card-${index}`} href="/listing/123" />
          )
        })}
        <div className="fixed bottom-0 left-0 right-0 flex justify-end mx-2 gap-2 items-end z-20 h-0">
          <MessageBox sender="Rb - Motors" />
          <MessageBox sender="Next Motors" />
          <Messenger />
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer >
    </>
  );
}
