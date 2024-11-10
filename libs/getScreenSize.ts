export type ScreenSize = "sm" | "md" | "lg" | "xl" | "2xl"

export const getScreenSize = (screenSize: ScreenSize) => {
    switch (screenSize) {
        case "sm":
            return "640px"
        case "md":
            return "768px"
        case "lg":
            return "1024px"
        case "xl":
            return "1280px"
        case "2xl":
            return "1536px"
        default:
            return ""
    }
}