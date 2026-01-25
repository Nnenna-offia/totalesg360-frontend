import { Flex, Text } from "@chakra-ui/react";

interface AIInsightsProps {
  title?: string;
  insight: string;
}

export default function AIInsights({ title, insight }: AIInsightsProps) {
  return (
    <Flex
      flexDirection={"column"}
      px={"1.1875rem"}
      py='.75rem'
      alignItems={"flex-start"}
      bg={"#F8F8F8"}
      border={"1px solid #C9EAFF"}
      borderRadius={"8px"}
    >
      <Text fontSize={"1rem"} fontWeight={"700"}>
        {title ? title : "AI Insights"}{" "}
      </Text>
      <Text fontWeight={400}>{insight}</Text>
    </Flex>
  );
}
