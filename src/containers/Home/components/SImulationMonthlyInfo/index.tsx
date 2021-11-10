import React from "react"
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input"
import {
    Box,
    Center,
    Grid,
    GridItem,
    Stack,
} from "@chakra-ui/layout"
import {
    Text
} from "@chakra-ui/react"
import { CalendarIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/button"
import { FinancingContext } from "../../../../context/Financing"
import {
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
} from "@chakra-ui/stat"

const SimulationMonthlyInfo: React.FC = () => {
    const {
        financingTime,
        totalPaid,
        totalTaxes,
        initialMonth,
        finalMonth,
        calculatedMonth,
        untilMonthTaxes,
        untilMonthAmortization,
        initialMonthInstallment,
        finalMonthInstallment,
        toPay,
        monthlyInstallment,
        simulationType,
        calculateMonth,
        changeInitialMonth,
        changeFinalMonth,
    } = React.useContext(FinancingContext)

    return (
        <Stack spacing={4} p={20}>
            {totalPaid && (
                <>
                    <Grid
                        gap={10}
                        templateColumns={{
                            sm: "repeat(1, 1fr)",
                            md: "repeat(5, 1fr)",
                        }}
                        mb={20}
                    >
                        <GridItem
                            colStart={{
                                sm: 0,
                                md: 2,
                            }}
                        >
                            <Stat textAlign="center">
                                <StatLabel>Valor total</StatLabel>
                                <StatNumber>R${totalPaid?.toFixed(2).replace('.', ',')}</StatNumber>
                                <StatHelpText>com juros</StatHelpText>
                            </Stat>
                        </GridItem>
                        <GridItem>
                            <Stat textAlign="center">
                                <StatLabel>Juros total</StatLabel>
                                <StatNumber>R${totalTaxes?.toFixed(2).replace('.', ',')}</StatNumber>
                            </Stat>
                        </GridItem>
                        <GridItem>
                            <Stat textAlign="center">
                                <StatLabel>Mensalidade</StatLabel>
                                <StatNumber>{monthlyInstallment.replace('.', ',')}</StatNumber>
                                <StatHelpText>Na tabela {simulationType}</StatHelpText>
                            </Stat>
                        </GridItem>
                    </Grid>
                    <Box>
                        <Grid
                            gap={5}
                            templateColumns={{
                                sm: "repeat(2, 1fr)",
                                lg: "repeat(3, 1fr)",
                            }}
                        >
                            <Box>
                                <Text isTruncated fontWeight="bold"
                                >Mês inicial</Text>
                                <InputGroup mt={3}>
                                    <InputLeftAddon bgColor="green" color="white" children={<CalendarIcon />}
                                    />{" "}
                                    <Input
                                        max={Number(financingTime) - 1}
                                        min={0}
                                        type="number"
                                        placeholder="Mês inicial"
                                        value={initialMonth}
                                        onChange={e => changeInitialMonth(Number(e.target.value))}
                                    />
                                </InputGroup>
                            </Box>
                            <Box>
                                <Text fontWeight="bold">Mês final</Text>
                                <InputGroup mt={3}>
                                    <InputLeftAddon bgColor="green" color="white" children={<CalendarIcon />}
                                    />
                                    <Input
                                        max={financingTime}
                                        min={initialMonth + 1}
                                        type="number"
                                        placeholder="Mês final"
                                        value={finalMonth}
                                        onChange={e => changeFinalMonth(Number(e.target.value))}
                                    />
                                </InputGroup>
                            </Box>
                            <GridItem
                                colSpan={{
                                    sm: 2,
                                    lg: 1,
                                }}
                                display="flex"
                                alignItems="flex-end"
                            >
                                <Button
                                    w="full"
                                    bgColor="green"
                                    color="white"
                                    onClick={calculateMonth}
                                >
                                    Calcular mês
                                </Button>
                            </GridItem>
                        </Grid>
                    </Box>
                    <Grid
                        gap={10}
                        templateColumns={{
                            sm: "repeat(1, 1fr)",
                            lg: "repeat(4, 1fr)",
                        }}
                        pt={20}
                    >
                        <GridItem
                            colStart={{
                                sm: 0,
                                lg: 1,
                            }}
                        >
                            <Stat textAlign="center">
                                <StatLabel>Total de juros pago</StatLabel>
                                <StatNumber>R${untilMonthTaxes.toFixed(2).replace('.', ',')}</StatNumber>
                                <StatHelpText>do mês {calculatedMonth}</StatHelpText>
                            </Stat>
                        </GridItem>
                        <GridItem>
                            <Stat textAlign="center">
                                <StatLabel>Total amortizado</StatLabel>
                                <StatNumber>R${untilMonthAmortization.toFixed(2).replace('.', ',')}</StatNumber>
                                <StatHelpText>do mês {calculatedMonth}</StatHelpText>
                            </Stat>
                        </GridItem>
                        <GridItem>
                            <Stat textAlign="center">
                                <StatLabel>Total pago</StatLabel>
                                <StatNumber>R${(untilMonthTaxes + untilMonthAmortization).toFixed(2).replace('.', ',')}</StatNumber>
                                <StatHelpText>Ao final do último mês</StatHelpText>
                            </Stat>
                        </GridItem>
                        <GridItem>
                            <Stat textAlign="center">
                                <StatLabel>Saldo devedor</StatLabel>
                                <StatNumber>R${toPay.toFixed(2).replace('.', ',')}</StatNumber>
                                <StatHelpText>Ao final do último mês</StatHelpText>
                            </Stat>
                        </GridItem>
                    </Grid>
                    {simulationType === 'sac' && (
                        <Grid
                            gap={10}
                            templateColumns={{
                                sm: "repeat(1, 1fr)",
                                md: "repeat(2, 1fr)",
                            }}
                            pt={20}
                        >
                            <GridItem
                                colStart={{
                                    sm: 0,
                                    md: 1,
                                }}
                            >
                                <Stat textAlign="center">
                                    <StatLabel>Parcela mês inicial</StatLabel>
                                    <StatNumber>R${initialMonthInstallment?.toFixed(2).replace('.', ',')}</StatNumber>
                                </Stat>
                            </GridItem>
                            <GridItem>
                                <Stat textAlign="center">
                                    <StatLabel>Parcela mês final</StatLabel>
                                    <StatNumber>R${finalMonthInstallment?.toFixed(2).replace('.', ',')}</StatNumber>
                                </Stat>
                            </GridItem>
                        </Grid>
                    )}
                </>
            )}
        </Stack>
    )
}

export default SimulationMonthlyInfo
