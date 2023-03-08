export const getLoginLS: () => string | null = () => {
    return localStorage.getItem("login")
} 

export const changeLoginLS: (value: string) => void = (value) => {
    localStorage.removeItem("login")
    localStorage.setItem("login", value)
}

