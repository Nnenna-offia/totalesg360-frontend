import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
// import BoardStructure from "./boardStucture";
import AIInsights from "@/components/elements/AIinsights";
import WorkforceComposition from "./workforceComposition";
import HealthSafetyWellbeing from "./healthSafetyWellbeing";
import IncidentSeverity from "./incidentSeverity";
import PermanentWorkforceRisk from "./permanentWorkforce";
import ContractorWorkforceRisk from "./contractorWorkforceRisk";
// import InternalAudit from "./internalAudit";

export default function SocialMiddleRow() {


  const regulatoryAlignment = [
    { value: "34%", name: "ISSB S1" },
    { value: "70%", name: "SEC / NGX" },
    { value: "60%", name: "Labour & Factories Acts" },
  ];
  return (
    <Stack>
      <Text mt={"2rem"} fontWeight={600} fontSize={"1.25rem"} px={"2rem"}>
        The Social Dashboard shows how your people, safety, and communities are
        doing — and where social risks could turn into compliance or reputation
        issues.{" "}
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
              Workforce Composition{" "}
            </Text>
            <WorkforceComposition />
            <Box>
              <Text fontWeight={600} fontSize={"1rem"} color={"#777777"}>
                {" "}
                Regulatory Alignment
              </Text>
              <Stack gap={0}>
                {regulatoryAlignment.map((item, index) => (
                  <Flex key={index} gap={"1rem"}>
                    <Text
                      w={"1rem"}
                      width={"fit-content"}
                      fontSize={"1rem"}
                      fontWeight={"800"}
                    >
                      {item.value}
                    </Text>
                    <Text fontSize={"1rem"} fontWeight={"400"}>
                      {item.name}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </Box>
          </Box>
          <AIInsights insight='Female representation is 12% below sector benchmark..' />
        </Box>

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
              Health, Safety & Wellbeing{" "}
            </Text>
            <HealthSafetyWellbeing />
            <IncidentSeverity />
          </Box>{" "}
          <AIInsights insight='Safety incidents increased 22%  mainly among contract workers.' />
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
              Permanent Workforce Risk{" "}
            </Text>
            <PermanentWorkforceRisk />{" "}
            <Text
              fontSize={"1rem"}
              mb={"1.5rem"}
              fontWeight={"700"}
              color={"#606060"}
            >
              Contractor Workforce Risk{" "}
            </Text>
            <ContractorWorkforceRisk />
            {/* <InternalAudit /> */}
          </Box>
          <AIInsights insight='Contractor safety performance is driving overall incident risk.' />
        </Box>
      </Grid>
    </Stack>
  );
}
