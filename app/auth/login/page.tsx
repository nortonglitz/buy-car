import { InputText } from "@/components"
import { IconAt, IconLockPassword } from "@tabler/icons-react"
import Link from "next/link"

export default function Login() {
    return (
        <>
            <h1 className="text-xl text-center mb-6 font-medium">Seja bem-vindo(a)</h1>
            <form className="flex flex-col gap-2">
                <InputText placeholder="E-mail" icon={IconAt} autoFocus />
                <div className="flex flex-col gap-1">
                    <InputText placeholder="Senha" icon={IconLockPassword} />
                    <Link
                        className="
                            text-sm
                            self-end
                            text-neutral-400
                            font-light
                            [&:hover]:underline
                            [&:active]:scale-98
                        "
                        href="/auth/lost-password"
                    >
                        Esqueceu sua senha?
                    </Link>
                </div>
                <button
                    type="submit"
                    className="
                        mt-2
                        bg-sky-500
                        text-white
                        px-3
                        rounded-full
                        py-1
                    "
                >
                    Entrar
                </button>
            </form>
            <hr className="my-4" />
            <div className="flex justify-center items-center">
                <p>Primeira vez aqui?</p>
                <Link href="/auth/register">
                    <button
                        className="
                            text-white
                            bg-teal-400
                            rounded-fullp
                            px-3
                            py-1
                            rounded-full
                            ml-2
                            [&:active]:scale-98
                        "
                    >
                        Cadastre-se
                    </button>
                </Link>
            </div>
        </>
    )
}