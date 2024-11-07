import { InputText } from "@/components"
import { IconAt, IconLockPassword, IconUser } from "@tabler/icons-react"
import { FormEventHandler } from "react"

type RegisterFormProps = {
    onSubmit: () => void
}

export const RegisterForm = ({
    onSubmit
}: RegisterFormProps) => {

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        onSubmit()
    }

    return (
        <>
            <h1 className="text-xl text-center mb-6 font-medium">Registro</h1>
            <form className="flex flex-col gap-2" onSubmit={handleFormSubmit}>
                <InputText icon={IconUser} placeholder="Nome" autoFocus />
                <InputText icon={IconAt} placeholder="E-mail" />
                <InputText icon={IconLockPassword} placeholder="Senha" />
                <InputText icon={IconLockPassword} placeholder="Confirme a senha" />
                <button
                    type="submit"
                    className="
                        mt-2
                        bg-teal-400
                        text-white
                        px-3
                        rounded-full
                        py-1
                    "
                >
                    Registrar
                </button>
            </form>
        </>
    )
}