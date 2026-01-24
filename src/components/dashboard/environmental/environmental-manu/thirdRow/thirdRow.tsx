import { Box, Grid, Stack, Text } from "@chakra-ui/react";
import WasteSummary from "./wasteSummary";
import AIInsightsWasteSummarys from "./AIinsights-wasteSummary";
import WasteTreatment from "./wasteTreatment";
import AIInsightsWasteTreatment from "./AIinsights-wasteTreatment";
import WasteConsumption from "./wasteConsumption";
import AIInsightsWasteConsumption from "./AIinsights-wasteConsumption";

export default function EnvironmentalThirdRow() {
  return (
    <Stack
      my={"2rem"}
      shadow={"sm"}
      px={"2rem"}
      py={"1.5rem"}
      borderRadius={"md"}
    >
      <Grid templateColumns={"2fr 1fr"} gap={"1rem"}>
        <Box
          display={"flex"}
          // bg={"red"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          {/* <Box> */}{" "}
          <Text
            fontSize={"1rem"}
            mb={"1.5rem"}
            fontWeight={"700"}
            color={"#606060"}
          >
            WASTE MANAGEMENT{" "}
          </Text>
          <Grid templateColumns={"1fr 1fr"} gap={"1rem"}>
            <Box>
              {" "}
              <WasteSummary />
              {/* </Box> */}
              <AIInsightsWasteSummarys />
            </Box>
            <Box
              display={"flex"}
              // bg={"red"}
              justifyContent={"space-between"}
              flexDirection={"column"}
            >
              {/* <Box> */}
              <WasteTreatment />
              {/* </Box>{" "} */}
              <AIInsightsWasteTreatment />
            </Box>
          </Grid>
        </Box>

        <Box
          display={"flex"}
          // bg={"red"}
          justifyContent={"space-between"}
          flexDirection={"column"}
        >
          {/* <Box gap={".5rem"}> */}{" "}
          <Text
            fontSize={"1rem"}
            mb={"1.5rem"}
            fontWeight={"700"}
            color={"#606060"}
          >
            Water Usage & Effluent{" "}
          </Text>
          <WasteConsumption />
          {/* </Box> */}
          <AIInsightsWasteConsumption />
        </Box>
      </Grid>
    </Stack>
  );
}
