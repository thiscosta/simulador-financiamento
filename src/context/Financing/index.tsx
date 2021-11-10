import React, { useState } from "react"
import * as price from "./formulas/price"
import * as sac from "./formulas/sac"

interface FinancingContextProps {
  financingValue: string
  financingTax: string
  financingTime: string
  totalPaid: number
  totalTaxes: number
  initialMonth: number
  finalMonth: number
  untilMonthTaxes: number
  untilMonthAmortization: number
  toPay: number
  monthlyInstallment: any
  calculatedMonth: string
  simulationType: string
  setFinancingTax: (financingTax: string) => void
  setFinancingTime: (financingTime: string) => void
  setFinancingValue: (financingValue: string) => void
  changeInitialMonth: (month: number) => void
  changeFinalMonth: (month: number) => void
  calculate: () => void
  calculateMonth: () => void
  setSimulationType: (simulationType: string) => void
}

export const FinancingContext = React.createContext<FinancingContextProps>(null)

const FinancingContextComponent: React.FC<any> = ({ children }) => {
  const [financingValue, setFinancingValue] = React.useState<string>(null)
  const [financingTime, setFinancingTime] = React.useState<string>(null)
  const [financingTax, setFinancingTax] = React.useState<string>(null)

  const [simulationType, setSimulationType] = useState<string>("price");
  const [totalPaid, setTotalPaid] = React.useState<number>(null)
  const [totalTaxes, setTotalTaxes] = React.useState<number>(null)
  const [monthlyInstallment, setMonthlyInstallment] =
    React.useState<any>("")

  const [initialMonth, setInitialMonth] = React.useState<number>(0)
  const [finalMonth, setFinalMonth] = React.useState<number>(0)

  const [untilMonthTaxes, setUntilMonthTaxes] = React.useState<number>(0)
  const [untilMonthAmortization, setUntilMonthAmortization] =
    React.useState<number>(0)
  const [toPay, setToPay] = React.useState<number>(0)
  const [calculatedMonth, setCalculatedMonth] = React.useState<string>(
    `${initialMonth} ao ${finalMonth}`
  )

  const calculate = () => {
    const { newMonthInstallment, newTotalPaid, newTotalTaxes } =
      (simulationType === 'price'
        ? calculatePriceMainValues
        : calculateSacMainValues)();

    setMonthlyInstallment(newMonthInstallment)
    setTotalPaid(newTotalPaid)
    setTotalTaxes(newTotalTaxes)
    calculateMonth();
  }

  const changeInitialMonth = (month: number) => {
    setInitialMonth(month)
  }

  const changeFinalMonth = (month: number) => {
    setFinalMonth(month)
  }

  const calculateMonth = () => {
    const { newTotalTax, newTotalAmortization, newToPay } =
      (simulationType === 'price'
        ? calculatePriceValues
        : calculateSacValues)();

    setUntilMonthTaxes(newTotalTax)
    setUntilMonthAmortization(newTotalAmortization)
    setToPay(newToPay)
    setCalculatedMonth(`${initialMonth} ao ${finalMonth}`)
  }

  const calculateSacMainValues = () => {
    const { parsedValue, parsedTax, parsedTime } = getParsedValues();


    return {
      newMonthInstallment: `
        R$${sac.getInstallmentOnSpecifiedMonth(parsedValue, parsedTax, parsedTime, 0).toFixed(2)}
         - 
        R$${sac.getInstallmentOnSpecifiedMonth(parsedValue, parsedTax, parsedTime, parsedTime).toFixed(2)}`,
      newTotalPaid: sac.accumulatedInstallmentsBetweenSpecificTimes(parsedValue, parsedTax, parsedTime, 0, parsedTime),
      newTotalTaxes: sac.accumulatedTaxesBetweenSpecificTimes(parsedValue, parsedTax, parsedTime, 0, parsedTime),
    }
  }

  const calculatePriceMainValues = () => {
    const { parsedValue, parsedTax, parsedTime } = getParsedValues();


    const coheficient = parsedTax / (1 - Math.pow(1 + parsedTax, -parsedTime))
    const newMonthInstallment = Number((parsedValue * coheficient))
    const newTotalPaid = (newMonthInstallment * parsedTime)
    const newTotalTaxes = Number((newTotalPaid - parsedValue))
    return {
      newMonthInstallment: newMonthInstallment.toFixed(2),
      newTotalPaid,
      newTotalTaxes,
    }
  }

  const calculateSacValues = () => {
    const { parsedValue, parsedTax, parsedTime } = getParsedValues();


    return {
      newTotalTax: sac.accumulatedTaxesBetweenSpecificTimes(
        parsedValue, parsedTax, parsedTime, initialMonth, finalMonth
      ),
      newTotalAmortization: sac.accumulatedAmortizationsBetweenSpecificTimes(
        parsedValue, parsedTime, finalMonth
      ),
      newToPay: sac.debitBalanceOnSpecificTime(
        parsedValue, parsedTime, finalMonth
      )
    }
  }

  const calculatePriceValues = () => {
    const { parsedValue, parsedTax, parsedTime } = getParsedValues();

    return {
      newTotalTax: price.accumulatedTaxesBetweenSpecificTimes(
        parsedValue, parsedTax, parsedTime, initialMonth, finalMonth
      ),
      newTotalAmortization: price.accumulatedAmortizationsBetweenSpecificTimes(
        parsedValue, parsedTax, parsedTime, initialMonth, finalMonth
      ),
      newToPay: price.debitBalanceOnSpecificTime(
        parsedValue, parsedTax, parsedTime, finalMonth + 1
      )
    }
  }

  const getParsedValues = () => ({
    parsedValue: Number(financingValue),
    parsedTax: Number(financingTax) / 100,
    parsedTime: Number(financingTime)
  })

  return (
    <FinancingContext.Provider
      value={{
        financingValue,
        financingTax,
        financingTime,
        totalPaid,
        totalTaxes,
        initialMonth,
        finalMonth,
        untilMonthTaxes,
        untilMonthAmortization,
        toPay,
        monthlyInstallment,
        calculatedMonth,
        simulationType,
        setFinancingTax,
        setFinancingTime,
        setFinancingValue,
        calculate,
        calculateMonth,
        changeInitialMonth,
        changeFinalMonth,
        setSimulationType
      }}
    >
      {children}
    </FinancingContext.Provider>
  )
}

export default FinancingContextComponent
