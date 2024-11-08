import { InputText } from "@/components"
import { IconUser, IconAt, IconLockPassword, IconCheck } from "@tabler/icons-react"

type FormsProps = {
    type: "name" | "password" | "email"
}

export const Forms = ({
    type
}: FormsProps) => {

    if (type === "password") {
        return (
            <form>
                <p className="text-center font-thin">Atualizar a sua senha</p>
                <InputText name="password" className="mt-2" icon={IconAt} placeholder="Senha atual" autoFocus />
                <InputText name="new-password" className="mt-2" icon={IconAt} placeholder="Nova senha" />
                <InputText name="new-password-confirm" className="mt-2" icon={IconAt} placeholder="Confirme nova senha" />
                <button
                    type="submit"
                    className="
                    mt-5
                    bg-teal-400
                    text-white
                    px-3
                    rounded-full
                    py-1
                    w-full
                "
                >
                    Alterar
                </button>
            </form>
        )
    }

    if (type === "email") {
        return (
            <form>
                <p className="text-center font-thin">O seu e-mail atual é</p>
                <p
                    className="
                            px-3
                            py-1
                            border
                            border-neutral-200
                            rounded-full
                            text-center
                        "
                >
                    norton.glitz@gmail.com
                </p>
                <InputText name="email" className="mt-2" icon={IconAt} placeholder="Novo e-mail" autoFocus />
                <button
                    type="submit"
                    className="
                    mt-5
                    bg-teal-400
                    text-white
                    px-3
                    rounded-full
                    py-1
                    w-full
                "
                >
                    Alterar
                </button>
            </form>
        )
    }

    if (type === "name") {
        return (
            <form>
                <p className="text-center font-thin">O seu nome atual é</p>
                <p
                    className="
                            px-3
                            py-1
                            border
                            border-neutral-200
                            rounded-full
                            text-center
                        "
                >
                    Norton
                </p>
                <InputText name="name" className="mt-2" icon={IconUser} placeholder="Novo nome" autoFocus />
                <button
                    type="submit"
                    className="
                    mt-5
                    bg-teal-400
                    text-white
                    px-3
                    rounded-full
                    py-1
                    w-full
                "
                >
                    Alterar
                </button>
            </form>
        )
    }
}