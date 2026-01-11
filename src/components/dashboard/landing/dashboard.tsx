import { Box, Stack, Text } from "@chakra-ui/react";
import DashboardTopRow from "./topRow";
import DashboardMiddleRow from "./middleRow/middleRow";
import { CustomTable } from "@/components/elements/customTable";
import { createColumnDef } from "./bottomTable";

export default function DashboardLanding() {
  const data = [
    {
      pillar: "Environmental",
      target_area: "Scope 1 Emissions",
      target_type: "reduction",
      baseline_year: 2020,
      baseline_value: 3900,
      target_value: 4563,
      unit: "tCOe",
      frequency: "Annual",
      target_year: 2026,
      department: "HSE Department",
    },
    {
      pillar: "Social",
      target_area: "Employee Training Hours",
      target_type: "increase",
      baseline_year: 2021,
      baseline_value: 1200,
      target_value: 3000,
      unit: "Hours",
      frequency: "Annual",
      target_year: 2025,
      department: "HR Department",
    },
    {
      pillar: "Governance",
      target_area: "Policy Updates",
      target_type: "compliance",
      baseline_year: 2022,
      baseline_value: 5,
      target_value: 10,
      unit: "Policies",
      frequency: "Annual",
      target_year: 2024,
      department: "Legal Department",
    },
  ];
  return (
    <Stack mb={'2rem'}>
      <DashboardTopRow />
      <Box mt={"2.6875rem"}>
        {" "}
        <DashboardMiddleRow />
      </Box>
      <Box mt={"2.6875rem"}>
        {" "}<Text mb={'1rem'} color="#454D5A" fontSize={'1rem'} fontWeight={700}>Defined Targets</Text>
        <CustomTable data={data} columns={createColumnDef()} />{" "}
      </Box>
    </Stack>
  );
}
