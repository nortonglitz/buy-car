import { IconMailForward } from "@tabler/icons-react"

export const EmailSent = () => {
    return (
        <>
            <IconMailForward className="self-center" size="6rem" />
            <h1 className="text-2xl font-medium text-center mb-4">Enviamos um e-mail</h1>
            <p>Verifique a sua caixa de entrada e siga as intruções para finalizar o seu registro.</p>
        </>
    )
}