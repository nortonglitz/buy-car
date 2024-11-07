"use client"

import { useState } from "react"
import { RegisterForm } from "./register-form"
import { EmailSent } from "./email-sent"

export default function Register() {

    const [emailSent, setEmailSent] = useState(false)

    const handleFormSubmit = () => {
        setEmailSent(true)
    }
    return (
        <>
            {emailSent ?
                <EmailSent />
                :
                <RegisterForm onSubmit={handleFormSubmit} />
            }
        </>
    )
}