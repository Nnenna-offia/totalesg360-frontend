import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import ElectricalConsumption from "./scope1emissions";
import Scope2Emissions from "./emissions";
import FuelConsumption from "./AIinsights";
import EmployeeCards from "./scope3emissions";
import CapacityBuilding from "./scope3breakdown";
import HSEIncidents from "./Incidents";
import MonthlyCompliance from "./monthlyCompliance";
import Scope1Emissions from "./scope1emissions";
import AIInsights from "./AIinsights";
import AIInsightsEmissions from "./AIinsights-emission";
import Scope3 from "./scope3breakdown";
import Scope3Emissions from "./scope3emissions";

export default function EnvironmentalMiddleRow() {
  return (
    <Stack my={"1rem"}>
      <Text fontWeight={600} fontSize={"1.25rem"} px={"2rem"} py={".875rem"}>
        The Environmental Dashboard shows how your operations impact the
        environment — tracking emissions, energy, water, waste, and regulatory
        compliance
      </Text>
      <Grid templateColumns={"1fr 1fr 1fr"} gap={"4.43rem"}>
        <Box>
          <Text
            fontSize={"1rem"}
            mb={"1.5rem"}
            fontWeight={"700"}
            color={"#606060"}
          >
            Emissions Overview{" "}
          </Text>
          <Scope1Emissions />
          <Scope2Emissions />
          <AIInsights />
        </Box>

        <Box>
          <Scope3Emissions />
          <Scope3 />
          <AIInsightsEmissions />
        </Box>

        <Box>
          <Text
            fontSize={"1rem"}
            mb={"1.5rem"}
            fontWeight={"700"}
            color={"#606060"}
          >
            Social Summary{" "}
          </Text>
          <MonthlyCompliance />
        </Box>
      </Grid>
    </Stack>
  );
}
