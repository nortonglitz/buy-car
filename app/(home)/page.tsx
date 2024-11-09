import { Filter } from "./filter"
import { Card } from "./card"
import { Messenger } from "@/components";

export default function Home() {

  const cards = new Array(40).fill(null)

  return (
    <>
      <Filter />
      <main className="absolute left-80 top-14 right-0 pt-4 px-4 grid grid-cols-5 gap-4 bottom-0 overflow-auto">
        {cards.map((value, index) => {
          return (
            <Card key={`car-card-${index}`} href="/listing/123" />
          )
        })}
        <Messenger />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer >
    </>
  );
}
