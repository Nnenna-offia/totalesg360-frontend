import { Box, Grid, Text } from "@chakra-ui/react";
import ElectricalConsumption from "./electricalConsumption";
import Scope2Emissions from "./emissions";
import FuelConsumption from "./fuelConsumption";
import EmployeeCards from "./employee";
import CapacityBuilding from "./capacityBuilding";
import HSEIncidents from "./Incidents";
import MonthlyCompliance from "./monthlyCompliance";

export default function DashboardMiddleRow() {
  return (
    <Grid
      // mt={"2rem"}
      shadow={"sm"}
      px={"2rem"}
      py={"1.5rem"}
      borderRadius={"md"}
      templateColumns={"1fr 1fr 1fr"}
      gap={"4.43rem"}
    >
      <Box>
        <Text
          fontSize={"1rem"}
          mb={"1.5rem"}
          fontWeight={"700"}
          color={"#606060"}
        >
          Environmental Summary{" "}
        </Text>
        <ElectricalConsumption />
        <Scope2Emissions />
        <FuelConsumption />
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
        <EmployeeCards />
        <CapacityBuilding />
        <HSEIncidents />
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
  );
}
