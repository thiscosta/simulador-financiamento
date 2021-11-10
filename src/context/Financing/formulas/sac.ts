export const amortization = (total: number, time: number) => {
    return total / time;
}

export const debitBalanceOnSpecificTime = (
    total: number,
    time: number,
    actualTime: number
) => {
    return amortization(total, time) * (time - actualTime);
}

export const accumulatedAmortizationsBetweenSpecificTimes = (
    total: number,
    totalTime: number,
    finalTime: number
) => {
    return finalTime * amortization(total, totalTime);
}

export const accumulatedTaxesBetweenSpecificTimes = (
    total: number,
    tax: number,
    totalTime: number,
    initialTime: number,
    finalTime: number
) => {
    return (
        tax * amortization(total, totalTime) * finalTime *
        (totalTime - initialTime - ((finalTime - 1) / 2))
    )
}

export const getInstallmentOnSpecifiedMonth = (total: number, tax: number, totalTime: number, actualTime: number) => {
    return (
        amortization(total, totalTime) * (1 + tax * (totalTime - actualTime + 1))
    )
}

export const accumulatedInstallmentsBetweenSpecificTimes = (
    total: number,
    tax: number,
    totalTime: number,
    initialTime: number,
    finalTime: number
) => {
    return (
        amortization(total, totalTime) * finalTime * (1 + tax * (totalTime - initialTime - ((finalTime - 1) / 2)))
    )
}