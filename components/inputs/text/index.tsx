import { IconProps } from "@tabler/icons-react"
import { DetailedHTMLProps, InputHTMLAttributes } from "react"

type InputTextProps = {
    icon?: React.ElementType<IconProps>
    iconPos?: "left" | "right"
    inputClassName?: string
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

export const InputText = ({
    icon: Icon,
    iconPos = "left",
    className,
    inputClassName,
    ...props
}: InputTextProps) => {
    return (
        <div className={`relative ${className}`}>
            <input
                type="text"
                className={`
                    h-fit
                    bg-neutral-50
                    rounded-full
                    border-neutral-200
                    border
                    ${Icon ? iconPos === "left" ? "pl-9 pr-3" : "pl-3 pr-9" : "pr-3 pl-3"}
                    py-1
                    w-full
                    ${inputClassName}
                `}
                {...props}
            />
            {Icon &&
                <Icon
                    className={`
                    absolute
                    top-1
                    ${iconPos === "left" ? "left-2" : "right-2"}
                    text-neutral-200
                    cursor-text
                `}
                />
            }
        </div>
    )
}