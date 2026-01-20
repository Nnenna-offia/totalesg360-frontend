import { Flex, Icon, Text } from "@chakra-ui/react";
import BluePump from "../../../../assets/dashboard/pump-blue.svg?react";
import GrayPump from "../../../../assets/dashboard/pump-gray.svg?react";
import LightPump from "../../../../assets/dashboard/pump-light.svg?react";

export default function FuelConsumption() {
  const data = [
    { timeline: "Last 6 months", icon: BluePump, value: "11,250" },
    { timeline: "Last month", icon: GrayPump, value: "2,450" },
    { timeline: "This month", icon: LightPump, value: "4,300" },
  ];

  return (
    <Flex flexDirection={"column"} alignItems={"flex-start"}>
      <Text fontSize={"1rem"} fontWeight={"500"} color={"#606060"}>
        Fuel Consumption (Litres){" "}
      </Text>
      <Flex mt={"1rem"} gap={".5rem"}>
        {data.map((item) => (
          <Flex
            key={item.timeline}
            // flexDirection={"column"}
            alignItems={"center"}
            gap={".1rem"}
            // bg={"red"}
            // flex={1}
          >
            <Icon as={item.icon} boxSize={"2rem"} />
            <Flex
              flexDirection={"column"}
              justifyContent={"space-between"}
              alignItems={"flex-start"}
            //   bg={"yellow"}
              w={'fit-content'}
              h={'full'}
            >
              {" "}
              <Text fontSize={".875rem"} fontWeight={"900"} color={"#202224"}>
                {item.value}
              </Text>
              <Text fontSize={".65rem"} fontWeight={"500"} color={"#9098A9"}>
                {item.timeline}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
