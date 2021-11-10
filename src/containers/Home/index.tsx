import React from "react"
import {
  Stack,
} from "@chakra-ui/layout"

import SimulationMainInfo from "./components/SimulationMainInfo"
import SimulationMonthlyInfo from "./components/SImulationMonthlyInfo"

const Home: React.FC = () => {
  return (
    <Stack spacing={4} p={{
      sm: 0,
      lg: 20
    }}>
      <SimulationMainInfo />
      <SimulationMonthlyInfo />
    </Stack>
  )
}

export default Home
