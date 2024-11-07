import { Filter } from "./filter"
import { Card } from "./card"

export default function Home() {
  return (
    <>
      <Filter />
      <main className="pl-[21rem] pt-4 w-full grid grid-cols-5">
        <Card />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
      </footer >
    </>
  );
}
