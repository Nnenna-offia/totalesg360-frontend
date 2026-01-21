import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import Scope2Emissions from "./emissions";
import MonthlyCompliance from "./monthlyCompliance";
import Scope1Emissions from "./scope1emissions";
import AIInsights from "./AIinsights";
import AIInsightsEmissions from "./AIinsights-emission";
import Scope3 from "./scope3breakdown";
import Scope3Emissions from "./scope3emissions";
import EnergyConsumption from "./energyConsumption";

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

        <Box
          display={"flex"}
          // bg={"red"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Box>
            <Scope3Emissions />
            <Scope3 />{" "}
          </Box>{" "}
          <AIInsightsEmissions />
        </Box>

        <Box>
          <Text
            fontSize={"1rem"}
            mb={"1.5rem"}
            fontWeight={"700"}
            color={"#606060"}
          >
            Energy Consumption{" "}
          </Text>
          <EnergyConsumption/>
          <MonthlyCompliance />
        </Box>
      </Grid>
    </Stack>
  );
}
