import { Flex, Stack, Text } from "@chakra-ui/react";

const Scope3 = () => {
  const data = [
    { label: "Purchased goods & services", value: "Partial" },
    { label: "Waste treatment", value: "Estimated" },
    { label: "Transport & logistics", value: "Completed" },
  ];
  return (
    <Flex flexDirection={"column"} mt={"1.5rem"} alignItems={"flex-start"}>
      <Text fontSize={"1rem"} fontWeight={"500"} color={"#606060"}>
        Scope 3 Emissions Breakdown{" "}
      </Text>
      <Flex
        flexDirection={"column"}
        gap={"0.25rem"}
      >
        {data.map((item, index) => (
          <Stack
            key={index}
            gap={0}
          >
            <Text fontSize={"1rem"} fontWeight={"900"}>
              {item.label}{" "}
            </Text>
            <Text fontSize={"1rem"} fontWeight={"500"}>
              {item.value}{" "}
            </Text>
          </Stack>
        ))}
      </Flex>
    </Flex>
  );
};

export default Scope3;
