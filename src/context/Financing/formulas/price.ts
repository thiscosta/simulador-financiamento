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
    const r = installment(total, tax, time)

    console.log('r: ', r)
    console.log('fva: ', fva(tax, (time - actualTime) + 1))
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
        fva(tax, totalTime - initialTime) - fva(tax, totalTime - initialTime - finalTime)
    );
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