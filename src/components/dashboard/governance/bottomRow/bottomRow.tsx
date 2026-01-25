import { Box, Button, Flex, Grid, Stack, Text } from "@chakra-ui/react";
import ComplianceReadiness from "./complianceReadiness";

export default function GovernanceBottomRow() {
  const permits = [
    { permit: "ISSB S1", status: "Ready" },
    { permit: "SEC/NGX", status: "In Progress" },
    { permit: "CAMA 2020 (board & corporate)", status: "Compliant" },
    { permit: "PIA Host Community (O&G)", status: "Pending" },
  ];

  const actions = [
    "Upload updated Anti-Corruption Policy",
    "Close outstanding audit issue",
    "Schedule board sustainability review",
  ];
  return (
    <Stack
      my={"2rem"}
      shadow={"sm"}
      px={"2rem"}
      py={"1.5rem"}
      borderRadius={"md"}
    >
      <Text fontWeight={700} fontSize={"1.25rem"}>
        COMPLIANCE & REGULATORY STATUS (MANUFACTURING DEFAULT){" "}
      </Text>
      <Grid templateColumns={"1fr 1fr 1fr"} gap={"1rem"}>
        <Box
          display={"flex"}
          gap={".5rem"}
          // bg={"red"}
          //   justifyContent={"space-between"}
          flexDirection={"column"}
        >
          {" "}
          <Box>
            <Text fontSize={"1rem"} fontWeight={"500"} color={"#606060"}>
              Active Permits{" "}
            </Text>
            <Text
              fontSize={"1rem"}
              mt={"1rem"}
              fontWeight={"500"}
              color={"#606060"}
            >
              Regulatory Alignment{" "}
            </Text>
            <Flex gapX={"3rem"} gapY={"1rem"} flexWrap={"wrap"} mt={"1rem"}>
              {permits.map((item) => (
                <Flex
                  key={item.permit}
                  flexDirection={"column"}
                  gap={".5rem"}
                  alignItems={"start"}
                >
                  <Text
                    // key={index}
                    fontSize={"1rem"}
                    fontWeight={400}
                    color={"#404040"}
                  >
                    {item.permit}
                  </Text>
                  <Text
                    fontWeight={800}
                    color={
                      item.status == "Ready" || item.status == "Compliant"
                        ? "#00B69B"
                        : "#FCA400"
                    }
                  >
                    {item.status}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>
        </Box>

        <Box>
          <ComplianceReadiness />
        </Box>

        <Box
          display={"flex"}
          // bg={"red"}
          //   justifyContent={"space-between"}
          flexDirection={"column"}
        >
          {" "}
          <Text fontSize={"1rem"} fontWeight={"500"} color={"#606060"}>
            Actions & Next Steps{" "}
          </Text>
          <Stack mt={"1rem"} gap={".5rem"}>
            {actions.map((action, index) => (
              <Flex key={index} gap={".5rem"}>
                <label className='checkbox'>
                  <input type='checkbox' />
                  <span className='checkmark'></span>
                </label>
                <Text fontSize={"0.9rem"} fontWeight={"500"}>
                  {action}
                </Text>
              </Flex>
            ))}
          </Stack>
          <Button fontWeight={600} mt={"1rem"} border={"1px solid #2C92D5"}>
            Add Audit Report{" "}
          </Button>
          <Button fontWeight={600} mt={"1rem"} border={"1px solid #2C92D5"}>
            Add New Community{" "}
          </Button>
        </Box>
      </Grid>
    </Stack>
  );
}
