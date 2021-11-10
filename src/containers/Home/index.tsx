import React from "react"
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input"
import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  Stack,
} from "@chakra-ui/layout"
import { CalendarIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/button"
import { Select } from "@chakra-ui/react"
import { FinancingContext } from "../../context/Financing"
import {
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
} from "@chakra-ui/stat"

const Home: React.FC = () => {
  const {
    financingTax,
    financingTime,
    financingValue,
    totalPaid,
    totalTaxes,
    initialMonth,
    finalMonth,
    calculatedMonth,
    untilMonthTaxes,
    untilMonthAmortization,
    toPay,
    monthlyInstallment,
    simulationType,
    setFinancingTax,
    setFinancingTime,
    setFinancingValue,
    calculate,
    calculateMonth,
    changeInitialMonth,
    changeFinalMonth,
    setSimulationType
  } = React.useContext(FinancingContext)

  return (
    <Stack spacing={4} p={20}>
      <Box>
        <Heading as="h1" size="xl" mb={10}>
          Insira os valores abaixo para simular seu financiamento
        </Heading>
        <Grid
          gap={10}
          templateColumns={{
            sm: "repeat(1, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          mb={10}
        >
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="green"
              children="R$"
            />
            <Input
              placeholder="Valor do financiamento"
              value={financingValue}
              onChange={e =>
                setFinancingValue(
                  e.target.value.replace(".", "").replace(",", ".")
                )
              }
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<CalendarIcon />}
            />
            <Input
              placeholder="Tempo do financiamento (em meses)"
              value={financingTime}
              onChange={e => setFinancingTime(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <InputLeftElement pointerEvents="none" color="green" children="%" />

            <Input
              max={100}
              type="number"
              placeholder="Taxa do financiamento (porcentagem ao mês)"
              value={financingTax}
              onChange={e => setFinancingTax(e.target.value)}
            />
          </InputGroup>
          <InputGroup>
            <Select
              placeholder="Selecione um tipo de financiamento"
              onChange={(e) => { setSimulationType(e.target.value) }}
              value={simulationType}
            >
              <option value="price">Price</option>
              <option value="sac">SAC</option>
            </Select></InputGroup>
        </Grid>
        <Center>
          <Button bgColor="green" color="white" onClick={calculate}>
            Simular
          </Button>
        </Center>
      </Box>

      {totalPaid && (
        <>
          <Grid
            gap={10}
            templateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(5, 1fr)",
            }}
          >
            <GridItem
              colStart={{
                sm: 0,
                md: 2,
              }}
            >
              <Stat textAlign="center">
                <StatLabel>Valor total</StatLabel>
                <StatNumber>R${totalPaid?.toFixed(2)}</StatNumber>
                <StatHelpText>com juros</StatHelpText>
              </Stat>
            </GridItem>
            <GridItem>
              <Stat textAlign="center">
                <StatLabel>Juros total</StatLabel>
                <StatNumber>R${totalTaxes?.toFixed(2)}</StatNumber>
              </Stat>
            </GridItem>
            <GridItem>
              <Stat textAlign="center">
                <StatLabel>Parcela mensal</StatLabel>
                <StatNumber>{monthlyInstallment}</StatNumber>
                <StatHelpText>Na tabela {simulationType}</StatHelpText>
              </Stat>
            </GridItem>
          </Grid>
          <Box>
            <Grid
              gap={10}
              templateColumns={{
                sm: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
            >
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children={<CalendarIcon />}
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
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children={<CalendarIcon />}
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
              <GridItem
                colSpan={{
                  sm: 2,
                  md: 1,
                }}
              >
                <Center>
                  <Button
                    w="full"
                    bgColor="green"
                    color="white"
                    onClick={calculateMonth}
                  >
                    Calcular mês
                  </Button>
                </Center>
              </GridItem>
            </Grid>
          </Box>
          <Grid
            gap={10}
            templateColumns={{
              sm: "repeat(1, 1fr)",
              md: "repeat(4, 1fr)",
            }}
          >
            <GridItem
              colStart={{
                sm: 0,
                md: 1,
              }}
            >
              <Stat textAlign="center">
                <StatLabel>Total de juros pago</StatLabel>
                <StatNumber>R${untilMonthTaxes.toFixed(2)}</StatNumber>
                <StatHelpText>do mês {calculatedMonth}</StatHelpText>
              </Stat>
            </GridItem>
            <GridItem>
              <Stat textAlign="center">
                <StatLabel>Total amortizado</StatLabel>
                <StatNumber>R${untilMonthAmortization.toFixed(2)}</StatNumber>
                <StatHelpText>do mês {calculatedMonth}</StatHelpText>
              </Stat>
            </GridItem>
            <GridItem>
              <Stat textAlign="center">
                <StatLabel>Total pago</StatLabel>
                <StatNumber>R${(untilMonthTaxes + untilMonthAmortization).toFixed(2)}</StatNumber>
                <StatHelpText>Ao final do último mês</StatHelpText>
              </Stat>
            </GridItem>
            <GridItem>
              <Stat textAlign="center">
                <StatLabel>Saldo devedor</StatLabel>
                <StatNumber>R${toPay.toFixed(2)}</StatNumber>
                <StatHelpText>Ao final do último mês</StatHelpText>
              </Stat>
            </GridItem>
          </Grid>
        </>
      )}
    </Stack>
  )
}

export default Home
