import { Flex, Stack, Text } from "@chakra-ui/react";

const Scope3Emissions = () => {
  return (
    <Flex flexDirection={"column"} mt={"1.5rem"} alignItems={"flex-start"}>
      <Text fontSize={"1rem"} fontWeight={"500"} color={"#606060"}>
        Scope 3 Emissions{" "}
      </Text>
      <Text fontSize={"1rem"} fontWeight={"600"} color={"#606060"}>
        (Estimated - Value Chain)
      </Text>

      <Stack gap={0} mt={".875rem"}>
        <Text fontSize={"1.25rem"} fontWeight={"900"}>
          1,250 tCO₂e{" "}
        </Text>
        <Text fontSize={"1rem"} fontWeight={"600"}>
          Coverage: 45% of value chain{" "}
        </Text>
        <Text fontSize={"1rem"} fontWeight={"600"}>
          Data Quality: Medium confidence{" "}
        </Text>
      </Stack>
    </Flex>
  );
};

export default Scope3Emissions;
