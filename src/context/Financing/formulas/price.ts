import { frc, fva } from "."

export const installment = (total: number, tax: number, time: number) => {
    return total * frc(tax, time);
}

export const debitBalanceOnSpecificTime = (
    total: number,
    tax: number,
    time: number,
    actualTime: number
) => {
    return installment(total, tax, time) * fva(tax, (time - actualTime) + 1);
}

export const accumulatedAmortizationsBetweenSpecificTimes = (
    total: number,
    tax: number,
    totalTime: number,
    initialTime: number,
    finalTime: number
) => {
    return installment(total, tax, totalTime) * (
        fva(tax, totalTime - initialTime) - fva(tax, totalTime - initialTime - (finalTime - initialTime))
    );
}
export const accumulatedTaxesUntilSpecificTime = (
    total: number,
    tax: number,
    totalTime: number,
    currentTime: number,
) => {
    return (
        installment(total, tax, totalTime)
        *
        (currentTime - (fva(tax, totalTime) - fva(tax, totalTime - currentTime)))
    )
}

export const accumulatedTaxesBetweenSpecificTimes = (
    total: number,
    tax: number,
    totalTime: number,
    initialTime: number,
    finalTime: number
) => {
    return (installment(total, tax, totalTime) * finalTime)
        -
        accumulatedAmortizationsBetweenSpecificTimes(
            total, tax, totalTime, initialTime, finalTime
        )
}