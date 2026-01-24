import {
  Box,
  Button,
  Flex,
  Grid,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CheckCircle } from "lucide-react";
import ComplianceReadiness from "./complianceReadiness";

export default function EnvironmentalBottomRow() {
  const permits = [
    "Air Quality Permit",
    "Water Discharge Permit",
    "Hazardous Waste Permit",
  ];

  const submissions = [
    { report: "NESREA Monthly Returns", status: "Submitted" },
    { report: "EPA Quarterly Report", status: "Pending" },
    { report: "Annual Environmental Impact Assessment", status: "Submitted" },
  ];

  const actions = [
    "Review Air Quality Data",
    "Update Waste Management Plan",
    "Prepare for Upcoming Audit",
  ];
  return (
    <Stack
      mb={"2rem"}
      shadow={"sm"}
      px={"2rem"}
      py={"1.5rem"}
      borderRadius={"md"}
    >
      <Text fontWeight={700} fontSize={"1.25rem"}>
        COMPLIANCE & REGULATORY STATUS (MANUFACTURING){" "}
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
            <Stack gap={"0"} mt={"1rem"}>
              {permits.map((permit, index) => (
                <Flex key={index} gap={".5rem"} alignItems={"center"}>
                  <Icon as={CheckCircle} color={"#2C92D5"} />{" "}
                  <Text
                    // key={index}
                    fontSize={"0.9rem"}
                    fontWeight={"500"}
                    color={"#404040"}
                  >
                    {permit}
                  </Text>
                </Flex>
              ))}
            </Stack>
          </Box>
          <Box mt={".5rem"}>
            <Text
              fontSize={"1rem"}
              mb={".5rem"}
              fontWeight={"700"}
              //   color={"#606060"}
            >
              Upcoming Expiries{" "}
            </Text>
            <Text> Air Permit: Expires in 45 days</Text>
          </Box>
          <Box>
            <Text fontSize={"1rem"} my={".5rem"} fontWeight={"700"}>
              Regulatory Submissions{" "}
            </Text>
            <ul>
              {submissions.map((submission, index) => (
                <li key={index}>
                  <Text fontSize={"0.9rem"} fontWeight={"600"}>
                    {submission.report}: {submission.status}
                  </Text>
                </li>
              ))}
            </ul>
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
            Input Environmental Data
          </Button>
          <Button fontWeight={600} mt={"1rem"} border={"1px solid #2C92D5"}>
            Submit Environmental Report
          </Button>
        </Box>
      </Grid>
    </Stack>
  );
}
