export const fva = (tax: number, time: number) => {
    return (
        (Math.pow((1 + tax), time) - 1)
        /
        (Math.pow((1 + tax), time) * tax)
    )
}

export const frc = (tax: number, time: number) => {
    return (
        (Math.pow((1 + tax), time) * tax)
        /
        (Math.pow((1 + tax), time) - 1)
    )
}