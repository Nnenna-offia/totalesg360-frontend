import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
// import BoardStructure from "./boardStucture";
import AIInsights from "@/components/elements/AIinsights";
import TrainingAndCapacityBuilding from "./trainingAndCapacityBuilding";
import NewGrievances from "./newGrievances";
import CommunityProjects from "./communityProjects";
import ImpactAreas from "./impactAreas";

// import InternalAudit from "./internalAudit";

export default function SocialThirdRow() {


  const riskIndicator = [
    { value: "medium", name: "Workforce Safety" },
    { value: "low", name: "Labour Compliance" },
    { value: "high", name: "Contractor Risk" },
    { value: "medium", name: "Community Relations" },
    { value: "low", name: "Skills Gap" },
    { value: "medium", name: "Occupational Health" },
    { value: "high", name: "Gender Representation" },
    { value: "medium", name: "Employee Turnover" },
  ];
  return (
    <Stack>
    
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
              Training & Capacity Building{" "}
            </Text>
            <TrainingAndCapacityBuilding />{" "}
            <Text
              fontSize={"1rem"}
              mb={"1.5rem"}
              fontWeight={"700"}
              color={"#606060"}
            >
              New grievances{" "}
            </Text>
            <NewGrievances />
          </Box>
          <AIInsights insight='Training completion below threshold may increase safety risk.' />
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
              Community & Social Impact{" "}
            </Text>
            <CommunityProjects />
            <ImpactAreas />
          </Box>{" "}
          <AIInsights insight='Community complaints linked to plant operations increased' />
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
              Social Risk Heat Indicator{" "}
            </Text>
            <Stack>
              {riskIndicator.map((risk, index) => (
                <Flex
                  key={index}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Text fontSize={"0.9rem"}>{risk.name}</Text>
                  <Box
                    width={"10px"}
                    height={"10px"}
                    borderRadius={"50%"}
                    bg={
                      risk.value === "low"
                        ? "#00B69B"
                        : risk.value === "medium"
                          ? "#FFA52F"
                          : "#F93C65"
                    }
                  ></Box>
                </Flex>
              ))}
            </Stack>
          </Box>
          <AIInsights insight='Safety incidents increased 22%  mainly among contract workers.' />
        </Box>
      </Grid>
    </Stack>
  );
}
