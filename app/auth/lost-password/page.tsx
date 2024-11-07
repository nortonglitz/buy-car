"use client"

import { useState } from "react"
import { EmailForm } from "./email-form"
import { EmailSent } from "./email-sent"

export default function LostPassword() {

    const [emailSent, setEmailSent] = useState(false)

    const handleFormSubmit = () => {
        setEmailSent(true)
    }

    return (
        <>
            {emailSent ?
                <EmailSent />
                :
                <EmailForm onSubmit={handleFormSubmit} />
            }
        </>
    )
}