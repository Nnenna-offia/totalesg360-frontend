import { Flex, Text } from "@chakra-ui/react";

export default function AIInsightsEmissions() {
  return (
    <Flex
      flexDirection={"column"}
      px={"1.1875rem"}
      py=".75rem"
      alignItems={"flex-start"}
      bg={"#F8F8F8"}
      border={'1px solid #C9EAFF'}
      borderRadius={'8px'}
    >
      <Text fontSize={"1rem"} fontWeight={"700"}>
        Fuel AI Insights (Litres){" "}
      </Text>
      <Text fontWeight={400}>
        Purchased goods contribute 48%, higher than benchmarks.{" "}
      </Text>
    </Flex>
  );
}
