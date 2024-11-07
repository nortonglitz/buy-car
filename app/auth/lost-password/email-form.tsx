"use client"

import { InputText } from "@/components"
import { IconAt } from "@tabler/icons-react"
import { FormEventHandler } from "react"

type EmailFormProps = {
    onSubmit: () => void
}

export const EmailForm = ({
    onSubmit
}: EmailFormProps) => {

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()
        onSubmit()
    }

    return (
        <>
            <h1 className="text-xl font-medium">Recupere a sua senha</h1>
            <p>Para recuperar a sua senha, por favor digite o seu e-mail abaixo.</p>
            <form className="flex flex-col gap-2 mt-4" onSubmit={handleFormSubmit}>
                <InputText icon={IconAt} autoFocus placeholder="E-mail" />
                <button
                    type="submit"
                    className="
                        bg-sky-500
                        rounded-full
                        text-white
                        px-3
                        py-1
                        w-fit
                        self-end
                    "
                >
                    Recuperar
                </button>
            </form>
        </>
    )
}