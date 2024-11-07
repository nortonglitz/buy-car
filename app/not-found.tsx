import Link from "next/link"
import { IconError404 } from "@tabler/icons-react"

export default function NotFound() {
    return (
        <main className="w-full flex justify-center">
            <div className="mt-40 max-w-lg">
                <IconError404 size="10rem" />
                <h2 className="text-3xl font-semibold">Essa página não está disponível</h2>
                <p>Tente uma página válida ou volte para o ínicio. <Link href="/" className="underline">Clique aqui para voltar ao início</Link>.</p>
            </div>
        </main>
    )
}