import React from "react"
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input"
import {
  Box,
  Center,
  Grid,
  Heading,
  Stack,
} from "@chakra-ui/layout"
import { CalendarIcon } from "@chakra-ui/icons"
import { Button } from "@chakra-ui/button"
import { Select, Text } from "@chakra-ui/react"
import { FinancingContext } from "../../../../context/Financing"

const SimulationMainInfo: React.FC = () => {
  const {
    financingTax,
    financingTime,
    financingValue,
    simulationType,
    setFinancingTax,
    setFinancingTime,
    setFinancingValue,
    calculate,
    setSimulationType
  } = React.useContext(FinancingContext)

  return (
    <Stack spacing={4} p={20} mb={-20}>
      <Box>
        <Heading as="h1" size="xl" mb={10}>
          Insira os valores abaixo para simular seu financiamento
        </Heading>
        <Grid
          gap={10}
          templateColumns={{
            sm: "repeat(1, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          mb={10}
        >
          <Box>
            <Text fontWeight="bold">Valor do financiamento</Text>
            <InputGroup mt={3}>
              <InputLeftAddon children="R$" bgColor="green" color="white" />
              <Input
                placeholder="Digite o valor do financiamento"
                value={financingValue}
                onChange={e =>
                  setFinancingValue(
                    e.target.value
                  )
                }
              />
            </InputGroup>
          </Box>

          <Box>
            <Text fontWeight="bold">Tempo financiado</Text>
            <InputGroup mt={3}>
              <InputLeftAddon children={<CalendarIcon />} bgColor="green" color="white" />
              <Input
                placeholder="Digite o tempo do financiamento"
                value={financingTime}
                onChange={e => setFinancingTime(e.target.value)}
              />
            </InputGroup>
          </Box>

          <Box>
            <Text fontWeight="bold">Taxa (mensal)</Text>
            <InputGroup mt={3}>
              <InputLeftAddon bgColor="green" color="white" children="%" />
              <Input
                placeholder="Digite a taxa do financiamento"
                value={financingTax}
                onChange={e => setFinancingTax(e.target.value)}
              />
            </InputGroup>
          </Box>

          <Box>
            <Text fontWeight="bold">Tabela</Text>
            <InputGroup mt={3}>
              <Select
                onChange={(e) => { setSimulationType(e.target.value) }}
                value={simulationType}
              >
                <option value="price">Price</option>
                <option value="sac">SAC</option>
              </Select>
            </InputGroup>
          </Box>
        </Grid>
        <Center>
          <Button bgColor="green" color="white" onClick={calculate}>
            Simular
          </Button>
        </Center>
      </Box>
    </Stack>
  )
}

export default SimulationMainInfo
