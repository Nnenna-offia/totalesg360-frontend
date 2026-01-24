import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import Scope2Emissions from "./emissions";
import Scope1Emissions from "./scope1emissions";
import AIInsights from "./AIinsights";
import AIInsightsEmissions from "./AIinsights-emission";
import Scope3 from "./scope3breakdown";
import Scope3Emissions from "./scope3emissions";
import EnergyConsumption from "./energyConsumption";
import EnergyIntensity from "./energyIntensity";
import AIInsightsEnergy from "./AIinsights-energy";

export default function EnvironmentalMiddleRow() {
  return (
    <Stack>
      <Text mt={"2rem"} fontWeight={600} fontSize={"1.25rem"} px={"2rem"}>
        The Environmental Dashboard shows how your operations impact the
        environment — tracking emissions, energy, water, waste, and regulatory
        compliance
      </Text>
      <Grid
        mt={"2rem"}
        shadow={"sm"}
        px={"2rem"}
        py={"1.5rem"}
        borderRadius={"md"}
        templateColumns={"1fr 1fr 1fr"}
        gap={"1rem"}
      >
        <Box
          display={"flex"}
          // bg={"red"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Box>
            {" "}
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
          </Box>
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

        <Box
          display={"flex"}
          // bg={"red"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          <Box gap={".5rem"}>
            {" "}
            <Text
              fontSize={"1rem"}
              mb={"1.5rem"}
              fontWeight={"700"}
              color={"#606060"}
            >
              Energy Consumption{" "}
            </Text>
            <EnergyConsumption />
            <EnergyIntensity />
          </Box>
          <AIInsightsEnergy />
        </Box>
      </Grid>
    </Stack>
  );
}
