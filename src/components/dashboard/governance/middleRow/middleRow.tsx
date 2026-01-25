import { Box, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import BoardStructure from "./boardStucture";
import AIInsights from "@/components/elements/AIinsights";
import InternalAudit from "./internalAudit";

export default function GovernanceMiddleRow() {
  const committees = [
    "Audit Committee",
    "Compensation Committee",
    "Nominating and Governance Committee",
  ];

  const regulatoryAlignment = [
    { value: "3", label: "Committees established" },
    { value: "7", label: "Meetings held (YTD)" },
    { value: "60%", label: "Attendance rate" },
  ];
  return (
    <Stack>
      <Text mt={"2rem"} fontWeight={600} fontSize={"1.25rem"} px={"2rem"}>
        To provide visibility into leadership structure, policies, controls,
        ethics, and compliance, helping manufacturers reduce regulatory risk,
        improve investor confidence, and strengthen oversight.
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
              Board Structure{" "}
            </Text>
            <Flex gap={"1rem"} mb={"1.5rem"}>
              <Text
                fontWeight={700}
                fontSize={"1.5rem"}
                display={"flex"}
                gap={".5rem"}
                alignItems={"center"}
              >
                18
                <span style={{ fontWeight: 400, fontSize: ".625rem" }}>
                  Total board members
                </span>
              </Text>

              <Text
                fontWeight={700}
                fontSize={"1.5rem"}
                display={"flex"}
                gap={".5rem"}
                alignItems={"center"}
              >
                40
                <span style={{ fontWeight: 400, fontSize: ".625rem" }}>
                  Independent directors{" "}
                </span>
              </Text>
            </Flex>
            <BoardStructure />
          </Box>
          <AIInsights insight='Board independence is below NGX recommended threshold.' />
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
              Board Committees
            </Text>
            <Box>
              <Text fontWeight={600} fontSize={"1rem"} color={"#777777"}>
                {" "}
                Regulatory Alignment
              </Text>
              <Stack gap={0}>
                {regulatoryAlignment.map((item, index) => (
                  <Flex key={index} gap={"1rem"}>
                    <Text w={"2.5rem"} fontSize={"1rem"} fontWeight={"800"}>
                      {item.value}
                    </Text>
                    <Text fontSize={"1rem"} fontWeight={"400"}>
                      {item.label}
                    </Text>
                  </Flex>
                ))}
              </Stack>
            </Box>
            <Box>
              <Text fontSize={"1rem"} my={".5rem"} fontWeight={"700"}>
                Committees{" "}
              </Text>
              <ul style={{ listStyle: "disc", marginLeft: "1rem" }}>
                {committees.map((committee, index) => (
                  <li key={index}>
                    <Text fontSize={"0.9rem"} fontWeight={"400"}>
                      {committee}
                    </Text>
                  </li>
                ))}
              </ul>
            </Box>
          </Box>{" "}
          <AIInsights insight='Attendance rate barely meets target for the quarter' />
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
              Risk Management{" "}
            </Text>
            <InternalAudit />
          </Box>
          <AIInsights insight='Audit issues remain unresolved beyond 60 days.' />
        </Box>
      </Grid>
    </Stack>
  );
}
